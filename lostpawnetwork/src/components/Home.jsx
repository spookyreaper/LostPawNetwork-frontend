import React, { useEffect, useState } from 'react';
import ReportList from '../components/ReportList';
import SearchFilter from '../components/SearchFilter';
import MapComponent from '../components/MapComponent';

function Home() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('https://lostpawnetwork-100c261cba8a.herokuapp.com/reports')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched reports:', data);
        setReports(data);
      })
      .catch(error => console.error('Failed to fetch reports:', error));
  }, []);

  return (
    <>
      <main className="p-4 md:p-8 min-h-screen bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-indigo-600 card">
                <h1 className="text-2xl font-bold mb-2 text-gray-800">Maps showing a location of the missing pets</h1>
                <MapComponent reports={reports} />
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-indigo-600 card">
                <h2 className="text-xl font-semibold text-gray-800">Why this website exists</h2>
                <p className="mt-2 text-gray-700">LostPawNetwork is dedicated to reuniting lost pets with their owners. Our mission is to provide a platform where people can report lost and found pets, share details, and connect with others in the community to ensure pets find their way back home.

</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <SearchFilter />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Reports</h2>
            <ReportList reports={reports} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
