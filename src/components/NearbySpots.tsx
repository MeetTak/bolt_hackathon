import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { mockSpots } from '../data/mockData';

export function NearbySpots() {
  const nearbySpots = mockSpots.slice(0, 4);

  return (
    <div className="space-y-4">
      {nearbySpots.map((spot) => (
        <div key={spot.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <div className="flex items-center">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <MapPin className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 text-sm">{spot.name}</h3>
              <p className="text-xs text-gray-600">{spot.address}</p>
            </div>
          </div>
          <div className="text-right">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              spot.fillLevel < 50 ? 'bg-green-100 text-green-800' :
              spot.fillLevel < 80 ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {spot.fillLevel}%
            </span>
            <p className="text-xs text-gray-500 mt-1">0.{Math.floor(Math.random() * 9) + 1} mi</p>
          </div>
        </div>
      ))}
    </div>
  );
}