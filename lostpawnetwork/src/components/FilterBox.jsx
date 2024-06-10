import React, { useState } from 'react';

const FilterBox = ({ onFilterChange }) => {
  const [idOrName, setIdOrName] = useState('');
  const [status, setStatus] = useState('lost');
  const [location, setLocation] = useState('');
  const [distance, setDistance] = useState(25);
  const [animalType, setAnimalType] = useState('cat');

  const handleFilterChange = () => {
    onFilterChange({ idOrName, status, location, distance, animalType });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-600">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Filter Lost Pets</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">ID or Name</label>
        <input
          type="text"
          value={idOrName}
          onChange={(e) => setIdOrName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
        <div className="flex items-center">
          <input
            type="radio"
            value="lost"
            checked={status === 'lost'}
            onChange={(e) => setStatus(e.target.value)}
            className="mr-2"
          />
          <label className="mr-4 text-gray-700">Lost</label>
          <input
            type="radio"
            value="found"
            checked={status === 'found'}
            onChange={(e) => setStatus(e.target.value)}
            className="mr-2"
          />
          <label className="mr-4 text-gray-700">Found</label>
          <input
            type="radio"
            value="reunited"
            checked={status === 'reunited'}
            onChange={(e) => setStatus(e.target.value)}
            className="mr-2"
          />
          <label className="text-gray-700">Reunited</label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Distance</label>
        <input
          type="range"
          min="0"
          max="100"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          className="w-full"
        />
        <div className="text-gray-700">{distance} Miles</div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Animal Type</label>
        <div className="flex items-center">
          <input
            type="radio"
            value="dog"
            checked={animalType === 'dog'}
            onChange={(e) => setAnimalType(e.target.value)}
            className="mr-2"
          />
          <label className="mr-4 text-gray-700">Dog</label>
          <input
            type="radio"
            value="cat"
            checked={animalType === 'cat'}
            onChange={(e) => setAnimalType(e.target.value)}
            className="mr-2"
          />
          <label className="mr-4 text-gray-700">Cat</label>
        </div>
      </div>
      <button
        onClick={handleFilterChange}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Find
      </button>
    </div>
  );
};

export default FilterBox;
