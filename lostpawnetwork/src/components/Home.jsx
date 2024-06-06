import React, { useEffect, useState } from 'react';
import ReportList from '../components/ReportList';
import SearchFilter from '../components/SearchFilter';

function Home() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/reports')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched reports:', data);
        setReports(data);
      })
      .catch(error => console.error('Failed to fetch reports:', error));
  }, []);

  return (
    <main className="p-4 md:p-8 min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-gray-800 card">
              <h1 className="text-2xl font-bold mb-2">Maps showing a location of the missing pets</h1>
              <div className="h-64 bg-gray-200 flex items-center justify-center">Map will be displayed here.</div>
            </div>
          </div>
          <div>
            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-gray-800 card">
              <h2 className="text-xl font-semibold">Why this website exists</h2>
              <p className="mt-2">A small description of the memo of helping people to search for their pets.</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <SearchFilter />
          <h2 className="text-2xl font-bold mb-4">Recent Reports</h2>
          <ReportList reports={reports} />
        </div>
      </div>
    </main>
  );
}

export default Home;
