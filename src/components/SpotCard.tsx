import React from 'react';
import { MapPin, Clock } from 'lucide-react';

export function SpotCard({ spot, isSelected, onClick }) {
  const fillLevelColor =
    spot.fillLevel < 50
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      : spot.fillLevel < 80
      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';

  return (
    <div
      onClick={onClick}
      className={`border rounded-lg p-4 transition-colors cursor-pointer ${
        isSelected
          ? 'border-green-500 bg-green-50 dark:bg-green-900'
          : 'border-gray-200 bg-white hover:border-green-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-400'
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">{spot.name}</h3>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            {spot.address}
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${fillLevelColor}`}>
          {spot.fillLevel}% Full
        </span>
      </div>

      <div className="flex flex-wrap gap-2 items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
        <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">{spot.type}</span>
        {spot.adopted && (
          <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 rounded text-xs">
            Adopted
          </span>
        )}
        <span className="flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          Updated 2h ago
        </span>
      </div>

      <div className="mt-2 text-sm text-blue-600 dark:text-blue-400">
        📦 Next pickup: <strong>{spot.nextPickup || 'Tomorrow 9:00 AM'}</strong>
      </div>
    </div>
  );
}
