import React from 'react';
import { Link } from 'react-router-dom';

const ReportItem = ({ report }) => {
  // Parse location if it's a string
  let locationString = report.location;
  try {
    const locationObj = JSON.parse(report.location);
    locationString = `Lat: ${locationObj.lat}, Lng: ${locationObj.lng}`;
  } catch (error) {
    // If parsing fails, keep the original location string
  }

  // Log the report to check the data structure
  console.log('Report data:', report);

  // Log the photo URLs to check if they are correct
  console.log('Photo URLs:', report.photoUrls);

  const imageUrl = report.photoUrls && report.photoUrls.length > 0 
    ? report.photoUrls[0].startsWith('http') 
      ? report.photoUrls[0]
      : `http://localhost:1337${report.photoUrls[0]}` // Ensure local paths are correctly prefixed with the base URL
    : null;

  // Log the final image URL to be used
  console.log('Image URL:', imageUrl);

  return (
    <Link to={`/report/${report.id}`} className="block">
      <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-gray-800 hover:bg-gray-100 transition">
        {imageUrl ? (
          <img src={imageUrl} alt={report.description} className="w-full h-32 object-cover rounded" />
        ) : (
          <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">No photo available</span>
          </div>
        )}
        <h3 className="text-lg font-bold mt-2 text-black">{report.pet ? report.pet.name : report.petName || 'No pet info'}</h3>
        <p className="text-gray-600">{locationString}</p>
      </div>
    </Link>
  );
};

export default ReportItem;
