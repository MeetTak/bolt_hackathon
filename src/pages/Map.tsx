import React, { useState } from 'react';
import { Search, Navigation } from 'lucide-react';
import { SpotCard } from '../components/SpotCard';
import { mockSpots } from '../data/mockData';

export function Map() {
  const [selectedSpot, setSelectedSpot] = useState<any>(null);
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpots = mockSpots.filter((spot) => {
    const matchesType = filterType === 'all' || spot.type === filterType;
    const matchesSearch =
      spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spot.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Search and Filter Bar */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="books">Books</option>
                <option value="clothes">Clothes</option>
                <option value="electronics">Electronics</option>
                <option value="food">Food</option>
              </select>

              {/* Near Me Button */}
              <button
                onClick={() => {
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                      const lat = position.coords.latitude;
                      const lng = position.coords.longitude;
                      window.open(
                        `https://www.google.com/maps/search/near+me/@${lat},${lng},14z`,
                        '_blank'
                      );
                    });
                  } else {
                    alert("Geolocation is not supported by this browser.");
                  }
                }}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Near Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex">
        {/* Google Maps Iframe */}
        <div className="flex-1 relative">
          <div className="absolute inset-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243341.1779609254!2d77.46578282003055!3d12.954280020061523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1751090749592!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Sidebar with Spots */}
        <div className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Drop-off Locations ({filteredSpots.length})
            </h2>

            <div className="space-y-4">
              {filteredSpots.map((spot) => (
                <SpotCard
                  key={spot.id}
                  spot={spot}
                  isSelected={selectedSpot?.id === spot.id}
                  onClick={() => {
                    setSelectedSpot(spot);
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        spot.address
                      )}`,
                      '_blank'
                    );
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
