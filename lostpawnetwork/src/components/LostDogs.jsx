import React, { useEffect, useState } from 'react';
import FilterBox from '../components/FilterBox';

const LostDogs = () => {
  const [lostDogs, setLostDogs] = useState([]);
  const [filters, setFilters] = useState({
    idOrName: '',
    status: 'lost',
    location: '',
    distance: 25,
    animalType: 'dog'
  });

  useEffect(() => {
    const fetchLostDogs = async () => {
      try {
        const query = new URLSearchParams(filters).toString();
        const response = await fetch(`http://localhost:1337/reports/lost/dogs?${query}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (response.ok) {
          setLostDogs(data);
        }
      } catch (error) {
        console.error('Error fetching lost dogs:', error);
      }
    };

    fetchLostDogs();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <FilterBox onFilterChange={handleFilterChange} />
        </div>
        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Lost Dogs</h1>
          {lostDogs.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lostDogs.map(pet => (
                <li key={pet.id} className="bg-white shadow-md rounded-lg p-4 border-t-4 border-indigo-600">
                  <div className="flex items-center mb-4">
                    <img src={pet.pet.photoURL} alt={pet.pet.name} className="w-20 h-20 object-cover rounded-full mr-4" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">{pet.pet.name}</h2>
                      <p className="text-gray-500">{pet.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700"><strong>Description:</strong> {pet.description}</p>
                  <p className="text-gray-700"><strong>Contact Info:</strong> {pet.contactInfo}</p>
                  <div className="flex mt-4 space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">View on Facebook</button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Share on Nextdoor</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">No lost dogs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LostDogs;
