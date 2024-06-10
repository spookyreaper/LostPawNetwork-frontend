import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user, lostReports, foundReports }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/edit-profile');
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Profile Details</h1>
      <div className="mb-6">
        <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
        <p className="text-gray-700"><strong>Username:</strong> {user.username}</p>
        <button
          onClick={handleEdit}
          className="mt-4 bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Edit Profile
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800">Lost Reports</h2>
        {lostReports.length > 0 ? (
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {lostReports.map((report) => (
              <li key={report.id} className="bg-white p-4 rounded-lg shadow-md">
                {report.photoUrls && report.photoUrls.length > 0 && (
                  <img src={`http://localhost:1337${report.photoUrls[0]}`} alt={report.description} className="w-full h-32 object-cover rounded mt-2" />
                )}
                <h3 className="text-lg font-bold mt-2 text-black">{report.petName || 'No pet info'}</h3>
                <p className="text-gray-600">{report.description}</p>
                <p className="text-gray-600"><strong>Status:</strong> {report.status}</p>
                <p className="text-gray-600"><strong>Location:</strong> Lat: {report.latitude}, Lng: {report.longitude}</p>
                <p className="text-gray-600"><strong>Contact Info:</strong> {report.contactInfo}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-4">No lost reports</p>
        )}
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800">Found Reports</h2>
        {foundReports.length > 0 ? (
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {foundReports.map((report) => (
              <li key={report.id} className="bg-white p-4 rounded-lg shadow-md">
                {report.photoUrls && report.photoUrls.length > 0 && (
                  <img src={`http://localhost:1337${report.photoUrls[0]}`} alt={report.description} className="w-full h-32 object-cover rounded mt-2" />
                )}
                <h3 className="text-lg font-bold mt-2 text-black">{report.petName || 'No pet info'}</h3>
                <p className="text-gray-600">{report.description}</p>
                <p className="text-gray-600"><strong>Status:</strong> {report.status}</p>
                <p className="text-gray-600"><strong>Location:</strong> Lat: {report.latitude}, Lng: {report.longitude}</p>
                <p className="text-gray-600"><strong>Contact Info:</strong> {report.contactInfo}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-4">No found reports</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
