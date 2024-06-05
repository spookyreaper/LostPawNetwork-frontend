import React from 'react';
import ReportItem from './ReportItem';

const ReportList = ({ reports }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Recent Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reports.map(report => (
          <ReportItem key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
};

export default ReportList;
