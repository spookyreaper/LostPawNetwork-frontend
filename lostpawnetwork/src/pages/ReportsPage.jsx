import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Report from '../components/Reports';

const ReportsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Report />
      </div>
      <Footer />
    </div>
  );
};

export default ReportsPage;
