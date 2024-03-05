import React, { useState } from 'react';
import logo from './assets/images/logo.svg'; // Make sure this path is correct

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the login logic here
    console.log('Login with:', { email, password });
  };

  return (
    <div dir="rtl" className="flex min-h-screen bg-gray-100">
      <div
        className="w-1/2"
        style={{
          background: 'linear-gradient(to left, #FFB900, rgba(255, 185, 0, 0))',
        }}
      >
        {/* Gradient background */}
      </div>
      <div className="flex w-1/2 items-center justify-center p-12">
        {/* Login Form */}
        <div className="max-w-md w-full">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="flex flex-col items-center justify-center mb-6">
              <img src={logo} alt="Logo" className="h-12 mb-2" />
              <h2 className="text-2xl font-bold" style={{ color: '#333' }}>
                باریباس
              </h2>
              <p className="text-md" style={{ color: '#555' }}>
                سامانه صاحب کالا
              </p>
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                placeholder="ایمیل"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                placeholder="رمز عبور"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                style={{ backgroundColor: '#FFB900', borderColor: '#FFB900' }}
                className="text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              >
                ورود به پنل
              </button>
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm"
                style={{ color: '#FFB900' }}
              >
                فراموشی رمز عبور؟
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;