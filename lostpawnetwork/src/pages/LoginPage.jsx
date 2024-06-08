import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';

const LoginPage = ({ onLoginSuccess, onLoginError, setUserId }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <Login onLoginSuccess={onLoginSuccess} onLoginError={onLoginError} setUserId={setUserId} />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
