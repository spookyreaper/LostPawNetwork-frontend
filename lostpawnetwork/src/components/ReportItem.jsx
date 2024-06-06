import React from 'react';
import { Link } from 'react-router-dom';

const ReportItem = ({ report }) => {
  return (
    <Link to={`/report/${report.id}`} className="block">
      <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-gray-800 hover:bg-gray-100 transition">
        <img src={report.photoURL} alt={report.description} className="w-full h-32 object-cover rounded" />
        <h3 className="text-lg font-bold mt-2 text-black">{report.pet ? report.pet.name : 'No pet info'}</h3>
        <p className="text-gray-600">{report.location}</p>
      </div>
    </Link>
  );
};

export default ReportItem;
