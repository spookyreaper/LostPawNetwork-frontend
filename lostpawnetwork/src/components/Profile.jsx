import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/edit-profile');
  };

  console.log('Rendering profile with user data:', user);

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h1 className="text-xl font-bold mb-4">Profile Details</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <button
        onClick={handleEdit}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;
