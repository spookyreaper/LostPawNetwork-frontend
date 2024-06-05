// src/pages/ReportPage.jsx
import React, { useEffect, useState } from 'react';
import Reports from '../components/Reports';

function ReportPage() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        // Simulated fetch request
        fetch('http://localhost:1337/api/reports')
            .then(response => response.json())
            .then(data => setReports(data))
            .catch(error => console.error('Failed to fetch reports:', error));
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center mb-4">Reports</h1>
            {reports.map(report => (
                <Reports key={report.id} report={report} />
            ))}
        </div>
    );
}

export default ReportPage;
