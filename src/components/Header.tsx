// import React from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import {
  MapPin,
  Home,
  AlertCircle,
  Heart,
  User,
  Sun,
  Moon,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const location = useLocation();
  const { theme, toggle } = useTheme();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/map', icon: MapPin, label: 'Map' },
    { path: '/report', icon: AlertCircle, label: 'Report' },
    { path: '/adopt', icon: Heart, label: 'Adopt' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-green-600 dark:text-green-400">
              ZeroWasteDrop
            </h1>
          </div>

          {/* Desktop Nav + Theme Toggle */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${
                      location.pathname === path
                        ? 'text-green-600 bg-green-50 dark:text-green-300 dark:bg-gray-700'
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-gray-700'
                    }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle Button */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-800" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50">
        <div className="flex justify-around py-2">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center px-3 py-2 text-xs font-medium transition-colors
                ${
                  location.pathname === path
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
