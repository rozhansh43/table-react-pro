// TableComponent.tsx
import React, { useState, ReactElement } from 'react';

type ColumnConfig<T> = {
    key: keyof T;
    label: string;
    sortable: boolean;
};

type TableComponentProps<T> = {
    data: T[];
    columns: ColumnConfig<T>[];
    onSort: (sortedData: T[]) => void;
};

function TableComponent<T extends object>({ data, columns, onSort }: TableComponentProps<T>): ReactElement {
    const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);

    const sortData = (key: keyof T) => {
        const direction = sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
        const sortedData = [...data].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        onSort(sortedData);
        setSortConfig({ key, direction });
    };

    const renderCellValue = (value: any): React.ReactNode => {
        if (value === null || value === undefined) {
            return ''; 
        }
        if (typeof value === 'boolean') {
            return value ? 'Yes' : 'No';
        }
        return String(value);
    };
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        {columns.map((column) => (
                            <th key={String(column.key)} scope="col" className={`px-6 py-3 ${column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''}`} onClick={() => column.sortable && sortData(column.key)}>
                                {column.label}
                                {column.sortable && (sortConfig?.key === column.key ? (sortConfig.direction === 'asc' ? ' ↑' : ' ↓') : ' ↕')}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="bg-white border-b">
                            {columns.map((column) => (
                                <td key={String(column.key)} className="px-6 py-4">
                                    {renderCellValue(item[column.key])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableComponent;