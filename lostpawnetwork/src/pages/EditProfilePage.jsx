import React from 'react';

const EditProfilePage = () => {
  // Here you can add a form for editing the profile
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-3">Edit Profile</h1>
      <form>
        {/* Form fields for profile editing go here */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input type="text" id="username" name="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update Profile</button>
      </form>
    </div>
  );
};

export default EditProfilePage;
