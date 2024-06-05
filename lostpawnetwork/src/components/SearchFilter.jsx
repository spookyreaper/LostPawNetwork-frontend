import React from 'react';

const SearchFilter = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8 border-t-4 border-gray-800">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <div className="mb-4 md:mb-0">
          <label htmlFor="species" className="block text-sm font-medium text-gray-700">Species</label>
          <select id="species" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Cat</option>
            <option>Dog</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input type="text" id="location" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter location" />
        </div>
        <div className="mt-4 md:mt-0">
          <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
