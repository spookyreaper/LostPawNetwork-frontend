// ReportForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMarker = ({ setLocation }) => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setLocation(e.latlng);
    },
  });

  return position === null ? null : <Marker position={position}></Marker>;
};

const ReportForm = ({ userId }) => {
  const [petName, setPetName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(null);
  const [contactInfo, setContactInfo] = useState('');
  const [animalType, setAnimalType] = useState('cat');
  const [breed, setBreed] = useState('');
  const [color, setColor] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('lost');
  const [category, setCategory] = useState('cat');
  const [petPhoto, setPetPhoto] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('petName', petName);
    formData.append('description', description);
    formData.append('location', JSON.stringify({ lat: location.lat, lng: location.lng }));
    formData.append('contactInfo', contactInfo);
    formData.append('animalType', animalType);
    formData.append('breed', breed);
    formData.append('color', color);
    formData.append('age', age);
    formData.append('status', status);
    formData.append('category', category);
    formData.append('userId', userId); // Include userId
    if (petPhoto) {
      formData.append('petPhoto', petPhoto);
    }

    try {
      const response = await fetch('http://localhost:1337/report', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        credentials: 'include', // Ensure credentials are included
        body: formData,
      });

      if (response.ok) {
        navigate('/');
      } else {
        const errorData = await response.json();
        console.error('Failed to create report', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="space-y-3 bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">Pet Name</label>
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            required
            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '150px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <LocationMarker setLocation={setLocation} />
          </MapContainer>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Info</label>
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Animal Type</label>
          <div className="mt-1 flex">
            <label className="mr-2">
              <input
                type="radio"
                value="cat"
                checked={animalType === 'cat'}
                onChange={(e) => setAnimalType(e.target.value)}
                className="mr-1"
              />
              Cat
            </label>
            <label>
              <input
                type="radio"
                value="dog"
                checked={animalType === 'dog'}
                onChange={(e) => setAnimalType(e.target.value)}
                className="mr-1"
              />
              Dog
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Breed</label>
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Color</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <div className="mt-1 flex">
            <label className="mr-2">
              <input
                type="radio"
                value="lost"
                checked={status === 'lost'}
                onChange={(e) => setStatus(e.target.value)}
                className="mr-1"
              />
              Lost
            </label>
            <label>
              <input
                type="radio"
                value="found"
                checked={status === 'found'}
                onChange={(e) => setStatus(e.target.value)}
                className="mr-1"
              />
              Found
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Pet Photo</label>
          <input
            type="file"
            onChange={(e) => setPetPhoto(e.target.files[0])}
            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
