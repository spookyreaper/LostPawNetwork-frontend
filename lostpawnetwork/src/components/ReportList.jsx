import React from 'react';
import Reports from './Reports';

const ReportList = ({ reports }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {reports.map(report => (
        <Reports key={report.id} report={report} />
      ))}
    </div>
  );
};

export default ReportList;
