import React from 'react';
import { Link } from 'react-router-dom';

const ReportList = ({ reports }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {reports.map(report => (
        <Link key={report.id} to={`/report/${report.id}`}>
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-gray-800">
            <img src={report.pet.photoURL} alt={report.description} className="w-full h-32 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2 text-black">{report.pet.name}</h3>
            <p className="text-gray-600">{report.location}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ReportList;
