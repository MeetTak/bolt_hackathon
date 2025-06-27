import React from 'react';
import { MapPin, AlertCircle, Heart, TrendingUp } from 'lucide-react';

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'report',
      user: 'Sarah M.',
      action: 'reported a full bin',
      location: 'Central Library',
      time: '2 hours ago',
      icon: AlertCircle,
      color: 'text-red-600 bg-red-100'
    },
    {
      id: 2,
      type: 'adopt',
      user: 'Mike R.',
      action: 'adopted a spot',
      location: 'Community Center',
      time: '4 hours ago',
      icon: Heart,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      id: 3,
      type: 'update',
      user: 'Lisa K.',
      action: 'updated fill level',
      location: 'Main Street Drop',
      time: '6 hours ago',
      icon: TrendingUp,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      id: 4,
      type: 'new',
      user: 'Admin',
      action: 'added new spot',
      location: 'Park Avenue',
      time: '1 day ago',
      icon: MapPin,
      color: 'text-green-600 bg-green-100'
    }
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
          <div className={`p-2 rounded-lg mr-3 ${activity.color}`}>
            <activity.icon className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-900">
              <span className="font-medium">{activity.user}</span> {activity.action} at{' '}
              <span className="font-medium">{activity.location}</span>
            </p>
            <p className="text-xs text-gray-600">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}