import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReportForm from '../components/ReportForm';

const ReportPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto p-4">
        <ReportForm />
      </div>
      <Footer />
    </div>
  );
};


export default ReportPage;
