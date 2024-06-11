import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReportForm from '../components/ReportForm';
import { AuthContext } from '../contexts/AuthContext';

const ReportPage = () => {
  const { userId } = useContext(AuthContext);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto p-4">
        <ReportForm userId={userId} />
      </div>
      <Footer />
    </div>
  );
};

export default ReportPage;
