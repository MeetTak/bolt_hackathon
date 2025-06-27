import React, { useEffect, useRef, useState } from 'react';
import { Filter, Search, Navigation } from 'lucide-react';
import { MapContainer } from '../components/MapContainer';
import { SpotCard } from '../components/SpotCard';
import { mockSpots } from '../data/mockData';

export function Map() {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpots = mockSpots.filter(spot => {
    const matchesType = filterType === 'all' || spot.type === filterType;
    const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         spot.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="h-screen flex flex-col">
      {/* Search and Filter Bar */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="books">Books</option>
                <option value="clothes">Clothes</option>
                <option value="electronics">Electronics</option>
                <option value="food">Food</option>
              </select>
              
              <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Navigation className="w-4 h-4 mr-2" />
                Near Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Map */}
        <div className="flex-1 relative">
          <MapContainer 
            spots={filteredSpots}
            selectedSpot={selectedSpot}
            onSpotSelect={setSelectedSpot}
          />
        </div>

        {/* Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Drop-off Locations ({filteredSpots.length})
            </h2>
            
            <div className="space-y-4">
              {filteredSpots.map((spot) => (
                <SpotCard
                  key={spot.id}
                  spot={spot}
                  isSelected={selectedSpot?.id === spot.id}
                  onClick={() => setSelectedSpot(spot)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}