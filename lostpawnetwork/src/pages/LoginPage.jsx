import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';

const LoginPage = ({ onLoginSuccess, onLoginError }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <Login onLoginSuccess={onLoginSuccess} onLoginError={onLoginError} />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
