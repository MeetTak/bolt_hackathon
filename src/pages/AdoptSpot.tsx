import React, { useState } from 'react';
import { Heart, MapPin, Users, Calendar, Award } from 'lucide-react';
import { mockSpots } from '../data/mockData';

export function AdoptSpot() {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [showAdoptForm, setShowAdoptForm] = useState(false);

  const availableSpots = mockSpots.filter(spot => !spot.adopted);
  const adoptedSpots = mockSpots.filter(spot => spot.adopted);

  const handleAdopt = (spot) => {
    setSelectedSpot(spot);
    setShowAdoptForm(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center mb-4">
          <Heart className="w-8 h-8 mr-3" />
          <h1 className="text-3xl font-bold">Adopt-a-Spot</h1>
        </div>
        <p className="text-lg opacity-90 mb-6">
          Take ownership of a donation spot in your community. Keep it clean, monitored, and help others find it easily.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 mr-2" />
              <span className="font-semibold">Community Impact</span>
            </div>
            <p className="text-sm opacity-90">Help maintain clean, accessible donation spots</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-semibold">Recognition</span>
            </div>
            <p className="text-sm opacity-90">Earn badges and community recognition</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="font-semibold">Flexible Commitment</span>
            </div>
            <p className="text-sm opacity-90">Choose your level of involvement</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Available Spots */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Available Spots</h2>
          <div className="space-y-4">
            {availableSpots.map((spot) => (
              <div key={spot.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-green-300 dark:hover:border-green-500 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{spot.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {spot.address}
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    spot.fillLevel < 50 ? 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900' :
                    spot.fillLevel < 80 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900' :
                    'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900'
                  }`}>
                    {spot.fillLevel}% Full
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <span className="mr-4">Type: {spot.type}</span>
                    <span>Last updated: 2h ago</span>
                  </div>
                  <button
                    onClick={() => handleAdopt(spot)}
                    className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Adopt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Adopted Spots */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Your Adopted Spots</h2>
          {adoptedSpots.length === 0 ? (
            <div className="text-center py-8">
              <Heart className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 mb-4">You haven't adopted any spots yet</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Adopt a spot to start making a difference in your community!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {adoptedSpots.map((spot) => (
                <div key={spot.id} className="border border-green-200 dark:border-green-400 bg-green-50 dark:bg-green-900 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{spot.name}</h3>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {spot.address}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-green-600 dark:text-green-300">
                      <Heart className="w-4 h-4 mr-1 fill-current" />
                      Adopted
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="mr-4">Adopted: Jan 15, 2024</span>
                      <span>Check-ins: 12</span>
                    </div>
                    <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors">
                      Manage
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Adoption Form Modal */}
      {showAdoptForm && selectedSpot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Adopt {selectedSpot.name}
            </h3>
            
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By adopting this spot, you commit to:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Check on the spot at least once a week</li>
                <li>• Report any issues or maintenance needs</li>
                <li>• Keep the area clean and organized</li>
                <li>• Update fill levels when possible</li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setShowAdoptForm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Spot adopted successfully!');
                  setShowAdoptForm(false);
                  setSelectedSpot(null);
                }}
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Adopt Spot
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
