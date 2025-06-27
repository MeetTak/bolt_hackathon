import React from 'react';
import { User, Award, MapPin, Calendar, TrendingUp, Settings } from 'lucide-react';

export function Profile() {
  const userStats = {
    spotsAdopted: 3,
    reportsSubmitted: 12,
    itemsDonated: 45,
    communityRank: 'Gold Contributor',
    joinDate: 'January 2024',
    totalPoints: 1250
  };

  const achievements = [
    { id: 1, name: 'First Adoption', description: 'Adopted your first spot', earned: true, icon: '🏆' },
    { id: 2, name: 'Community Helper', description: 'Submitted 10 reports', earned: true, icon: '🤝' },
    { id: 3, name: 'Donation Champion', description: 'Donated 50+ items', earned: false, icon: '🎯' },
    { id: 4, name: 'Spot Guardian', description: 'Maintained a spot for 6 months', earned: false, icon: '🛡️' },
  ];

  const recentActivity = [
    { id: 1, action: 'Adopted Central Library Book Drop', date: '2 days ago', type: 'adopt' },
    { id: 2, action: 'Reported full bin at Main St', date: '1 week ago', type: 'report' },
    { id: 3, action: 'Updated fill level at Community Center', date: '1 week ago', type: 'update' },
    { id: 4, action: 'Donated 5 books at Library', date: '2 weeks ago', type: 'donate' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex items-center">
          <div className="bg-green-100 p-4 rounded-full mr-6">
            <User className="w-12 h-12 text-green-600" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            <p className="text-gray-600">john.doe@email.com</p>
            <div className="flex items-center mt-2">
              <Award className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-sm font-medium text-yellow-600">{userStats.communityRank}</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-sm text-gray-600">{userStats.totalPoints} points</span>
            </div>
          </div>
          <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stats */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-lg mb-2 mx-auto w-fit">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{userStats.spotsAdopted}</div>
                <div className="text-sm text-gray-600">Spots Adopted</div>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-lg mb-2 mx-auto w-fit">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{userStats.reportsSubmitted}</div>
                <div className="text-sm text-gray-600">Reports Submitted</div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-lg mb-2 mx-auto w-fit">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{userStats.itemsDonated}</div>
                <div className="text-sm text-gray-600">Items Donated</div>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-3 rounded-lg mb-2 mx-auto w-fit">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">11</div>
                <div className="text-sm text-gray-600">Months Active</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className={`p-2 rounded-lg mr-4 ${
                    activity.type === 'adopt' ? 'bg-purple-100' :
                    activity.type === 'report' ? 'bg-red-100' :
                    activity.type === 'update' ? 'bg-blue-100' :
                    'bg-green-100'
                  }`}>
                    {activity.type === 'adopt' && <MapPin className="w-4 h-4 text-purple-600" />}
                    {activity.type === 'report' && <TrendingUp className="w-4 h-4 text-red-600" />}
                    {activity.type === 'update' && <Settings className="w-4 h-4 text-blue-600" />}
                    {activity.type === 'donate' && <Award className="w-4 h-4 text-green-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border ${
                  achievement.earned
                    ? 'border-green-200 bg-green-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">{achievement.icon}</span>
                  <div className="flex-1">
                    <h3 className={`font-medium ${
                      achievement.earned ? 'text-green-900' : 'text-gray-600'
                    }`}>
                      {achievement.name}
                    </h3>
                    {achievement.earned && (
                      <span className="text-xs text-green-600 font-medium">EARNED</span>
                    )}
                  </div>
                </div>
                <p className={`text-sm ${
                  achievement.earned ? 'text-green-700' : 'text-gray-600'
                }`}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}