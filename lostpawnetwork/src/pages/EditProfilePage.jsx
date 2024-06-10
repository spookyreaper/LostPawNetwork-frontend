import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EditProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Profile</h1>
        <form className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactInfo" className="block text-gray-700 text-sm font-bold mb-2">Contact Info</label>
            <input 
              type="text" 
              id="contactInfo" 
              name="contactInfo" 
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          <button 
            type="submit" 
            className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
          >
            Update Profile
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EditProfilePage;
