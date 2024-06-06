import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CompleteProfile from '../components/CompleteProfile';

const CompleteProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <CompleteProfile />
      </div>
      <Footer />
    </div>
  );
};

export default CompleteProfilePage;
