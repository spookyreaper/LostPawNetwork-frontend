import React from 'react';
import { Link } from 'react-router-dom';

const Reports = ({ report }) => {
  return (
    <Link to={`/reports/${report.id}`}>
      <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-gray-800">
        <img src={report.pet.photoURL} alt={report.description} className="w-full h-32 object-cover rounded" />
        <h3 className="text-lg font-bold mt-2 text-black">{report.pet.name}</h3>
        <p className="text-gray-600">{report.location}</p>
        <p className={`text-sm font-semibold ${report.status === 'lost' ? 'text-red-500' : 'text-green-500'}`}>
          Status: {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
        </p>
      </div>
    </Link>
  );
};

export default Reports;
