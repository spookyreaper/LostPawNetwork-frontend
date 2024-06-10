import React from 'react';
import ReportItem from './ReportItem';

const ReportList = ({ reports }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {reports.map(report => (
        <ReportItem key={report.id} report={report} />
      ))}
    </div>
  );
};

export default ReportList;
