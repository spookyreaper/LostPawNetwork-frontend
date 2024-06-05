import React, { useEffect, useState } from 'react';
import Reports from './Reports';
import SearchFilter from './SearchFilter';

function Home() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1337/api/reports')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched reports:', data);  // Add console log here
                setReports(data);
            })
            .catch(error => console.error('Failed to fetch reports:', error));
    }, []);

    return (
        <main className="p-8 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-2">
                    <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-gray-800">
                        <h1 className="text-2xl font-bold mb-2">Maps showing a location of the missing pets</h1>
                        <div className="h-64 bg-gray-200 flex items-center justify-center">Map will be displayed here.</div>
                    </div>
                </div>
                <div>
                    <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-gray-800">
                        <h2 className="text-xl font-semibold">Why this website exists</h2>
                        <p className="mt-2">A small description of the memo of helping people to search for their pets.</p>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <SearchFilter />
                <h2 className="text-2xl font-bold mb-4">Recent Reports</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {reports.map(report => (
                        <Reports key={report.id} report={report} />  // Using Reports component for each report
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Home;
