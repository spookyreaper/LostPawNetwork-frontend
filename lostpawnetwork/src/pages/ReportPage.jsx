import React from 'react';
import ReportList from '../components/ReportList';

const ReportPage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">Reports</h1>
      <ReportList />
    </div>
  );
};

export default ReportPage;
