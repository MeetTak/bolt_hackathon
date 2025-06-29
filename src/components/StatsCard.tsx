import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  change: string;
  color: 'green' | 'blue' | 'purple' | 'orange';
}

export function StatsCard({ icon: Icon, title, value, change, color }: StatsCardProps) {
  const colorClasses = {
    green: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300',
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300',
    orange: 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300',
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className="text-sm font-medium text-green-600 dark:text-green-400">{change}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">from last month</span>
      </div>
    </div>
  );
}
