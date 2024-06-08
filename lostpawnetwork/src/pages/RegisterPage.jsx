import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Register from '../components/Register';

const RegisterPage = ({ setUserId }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <Register setUserId={setUserId} />
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
