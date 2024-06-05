import React from 'react';

const Reports = ({ report }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-gray-800">
      <img src={report.photoURL} alt={report.name} className="w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{report.name}</h3>
      <p className="text-gray-600">{report.breed}</p>
    </div>
  );
};

export default Reports;
