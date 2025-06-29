import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Recycle, TrendingUp, Award } from 'lucide-react';
import { StatsCard } from '../components/StatsCard';
import { RecentActivity } from '../components/RecentActivity';
import { NearbySpots } from '../components/NearbySpots';

export function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to ZeroWasteDrop</h1>
        <p className="text-lg mb-6 opacity-90">
          Discover nearby donation spots, track real-time availability, and help build a sustainable community.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/map"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Find Drop-off Spots
          </Link>
          <Link
            to="/adopt"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            Adopt a Spot
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          icon={MapPin}
          title="Active Spots"
          value="127"
          change="+12%"
          color="green"
        />
        <StatsCard
          icon={Users}
          title="Community Members"
          value="2,341"
          change="+8%"
          color="blue"
        />
        <StatsCard
          icon={Recycle}
          title="Items Donated"
          value="15,678"
          change="+23%"
          color="purple"
        />
        <StatsCard
          icon={Award}
          title="Spots Adopted"
          value="89"
          change="+15%"
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Nearby Spots */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Nearby Spots</h2>
            <Link
              to="/map"
              className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium text-sm"
            >
              View All
            </Link>
          </div>
          <NearbySpots />
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
            <Clock className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          </div>
          <RecentActivity />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/report"
            className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900 transition-colors"
          >
            <div className="bg-red-100 dark:bg-red-200 p-3 rounded-lg mr-4">
              <MapPin className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Report Issue</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Report full bins or problems</p>
            </div>
          </Link>

          <Link
            to="/adopt"
            className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900 transition-colors"
          >
            <div className="bg-green-100 dark:bg-green-200 p-3 rounded-lg mr-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Adopt a Spot</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Take ownership of a location</p>
            </div>
          </Link>

          <Link
            to="/map"
            className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-green-300 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900 transition-colors"
          >
            <div className="bg-blue-100 dark:bg-blue-200 p-3 rounded-lg mr-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">View Analytics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Track community impact</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
