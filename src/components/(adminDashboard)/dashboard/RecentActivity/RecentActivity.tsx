import React from 'react';
import ActivityItem from './ActivityItem';
import { TActivityItem } from '@/types';


interface RecentActivityProps {
  activities: TActivityItem[];
  maxItems?: number;
}

const RecentActivity: React.FC<RecentActivityProps> = ({ 
  activities, 
  maxItems = activities.length 
}) => {
  const displayedActivities = maxItems ? activities.slice(0, maxItems) : activities;
  
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View All
        </button>
      </div>
      <div className="overflow-y-auto max-h-[500px]">
        {displayedActivities.map((activity) => (
          <ActivityItem key={activity.id} item={activity} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
