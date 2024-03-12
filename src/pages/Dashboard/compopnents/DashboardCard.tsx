import React from 'react';

export default function DashboardCard({ color }: { color: string }) {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="h-[80px] w-[227px] flex  px-4 rounded text-white items-center">
      <div>
        <h1 className="font-bold">500</h1>
        <p className="text-[12px]">Total Registered Participant</p>
      </div>
    </div>
  );
}
