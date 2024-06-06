import React from 'react';

const ReportItem = ({ report }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-gray-800">
      <img src={report.photoURL} alt={report.description} className="w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{report.pet ? report.pet.name : 'No pet info'}</h3>
      <p className="text-gray-600">{report.location}</p>
    </div>
  );
};

export default ReportItem;
