import React from 'react';
import FinancialChart from './FinancialChart';
import TaskTracker from './TaskTracker';
import KPISection from './KPISection';

export default function Dashboard() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Financial Overview</h2>
          <FinancialChart />
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Task Tracker</h2>
          <TaskTracker />
        </div>
      </div>
      <div className="mt-4 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Key Performance Indicators</h2>
        <KPISection />
      </div>
    </div>
  );
}