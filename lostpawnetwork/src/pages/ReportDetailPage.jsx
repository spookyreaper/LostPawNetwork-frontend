import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ReportDetailPage = () => {
  const { id } = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch(`https://lostpawnetwork-100c261cba8a.herokuapp.com/reports/${id}`)
      .then(response => response.json())
      .then(data => setReport(data))
      .catch(error => console.error('Failed to fetch report:', error));
  }, [id]);

  if (!report) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-8 bg-white p-6 rounded-lg shadow-md">
          <img src={report.photoURL} alt={report.description} className="w-full h-64 object-cover rounded" />
          <h2 className="text-2xl font-bold text-gray-900">{report.pet ? report.pet.name : 'No pet info'}</h2>
          <p className="text-gray-600">{report.description}</p>
          <p className="text-gray-600">{report.location}</p>
          <p className="text-gray-600">{report.contactInfo}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportDetailPage;
