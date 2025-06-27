import React from 'react';
import { MapPin, Clock, Users } from 'lucide-react';

interface SpotCardProps {
  spot: any;
  isSelected: boolean;
  onClick: () => void;
}

export function SpotCard({ spot, isSelected, onClick }: SpotCardProps) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg border cursor-pointer transition-all ${
        isSelected
          ? 'border-green-500 bg-green-50 shadow-md'
          : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-gray-900">{spot.name}</h3>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            {spot.address}
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          spot.fillLevel < 50 ? 'bg-green-100 text-green-800' :
          spot.fillLevel < 80 ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {spot.fillLevel}% Full
        </span>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center">
          <span className="capitalize bg-gray-100 px-2 py-1 rounded text-xs mr-2">
            {spot.type}
          </span>
          {spot.adopted && (
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
              Adopted
            </span>
          )}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>Updated 2h ago</span>
        </div>
      </div>

      {spot.nextPickup && (
        <div className="mt-3 p-2 bg-blue-50 rounded text-sm">
          <div className="flex items-center text-blue-700">
            <Clock className="w-4 h-4 mr-1" />
            Next pickup: {spot.nextPickup}
          </div>
        </div>
      )}
    </div>
  );
}