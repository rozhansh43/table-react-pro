import React, { useState, useEffect } from 'react';
import TableComponent from './TableComponent';

type Car = {
    name: string;
    type: string;
    year: number;
};

const MainPage: React.FC = () => {
    const [cars, setCars] = useState<Car[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCars = async () => {
            const response: Car[] = [
                { name: 'Tesla Model S', type: 'Electric', year: 2020 },
                { name: 'Ford Mustang', type: 'Petrol', year: 2018 },
                { name: 'Chevrolet Bolt', type: 'Electric', year: 2019 },
                { name: 'Toyota Prius', type: 'Hybrid', year: 2015 },
                { name: 'Honda Accord', type: 'Petrol', year: 2021 },
                { name: 'BMW i3', type: 'Electric', year: 2018 },
                { name: 'Subaru Outback', type: 'Petrol', year: 2022 },
                { name: 'Tesla Model X', type: 'Electric', year: 2021 },
                { name: 'Tesla Model 3', type: 'Electric', year: 2022 },
                { name: 'Hyundai Ioniq', type: 'Hybrid', year: 2017 },
                { name: 'Lucid Air', type: 'Electric', year: 2022 },];
            setTimeout(() => {
                setCars(response);
                setLoading(false);
            }, 1000);
        };

        fetchCars();
    }, []);

    const handleSort = (sortedCars: Car[]) => {
        setCars(sortedCars);
    };

    const handleDeleteCars = () => {
        setCars([]);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="p-4 w-1/5 bg-white">
                {/* Sidebar content */}
                <div className="sticky top-0">
                    <p className="text-2xl font-semibold text-gray-700">Sidebar</p>
                    {/*navigation links ... */}
                </div>
                <button onClick={handleDeleteCars} className="mt-4 text-white bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Delete Data
                </button>
            </div>
            <div className="flex-1 p-10 relative">
                <TableComponent<Car>
                    data={cars ?? []}
                    columns={[
                        { key: 'name', label: 'Car Name', sortable: true },
                        { key: 'type', label: 'Car Type', sortable: true },
                        { key: 'year', label: 'Year', sortable: true },
                    ]}
                    onSort={handleSort}
                />
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                )}
                {!loading && cars && cars.length === 0 && (
                    <div className="text-center py-10">
                        <p className="text-gray-500">No cars available.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainPage;