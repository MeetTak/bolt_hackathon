import React, { useState } from 'react';
import { Camera, MapPin, Send, AlertTriangle } from 'lucide-react';

export function Report() {
  const [reportType, setReportType] = useState('full');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [urgency, setUrgency] = useState('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ reportType, description, location, urgency });
    alert('Report submitted successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-gray-900 dark:text-gray-100">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center mb-6">
          <div className="bg-red-100 dark:bg-red-900 p-3 rounded-lg mr-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Report an Issue</h1>
            <p className="text-gray-600 dark:text-gray-400">Help keep our community spots clean and functional</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Report Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              What's the issue?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { value: 'full', label: 'Bin is Full', icon: '🗑️' },
                { value: 'damaged', label: 'Damaged Equipment', icon: '🔧' },
                { value: 'missing', label: 'Missing Bin', icon: '❓' },
                { value: 'inappropriate', label: 'Inappropriate Items', icon: '⚠️' },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                    reportType === option.value
                      ? 'border-green-500 bg-green-50 dark:bg-green-900'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <input
                    type="radio"
                    name="reportType"
                    value={option.value}
                    checked={reportType === option.value}
                    onChange={(e) => setReportType(e.target.value)}
                    className="sr-only"
                  />
                  <span className="text-2xl mr-3">{option.icon}</span>
                  <span className="font-medium">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter address or spot name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="button"
              className="mt-2 text-sm text-green-600 dark:text-green-400 hover:text-green-700 font-medium"
            >
              Use current location
            </button>
          </div>

          {/* Urgency Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Urgency Level
            </label>
            <div className="flex space-x-4">
              {[
                { value: 'low', label: 'Low', color: 'green' },
                { value: 'medium', label: 'Medium', color: 'yellow' },
                { value: 'high', label: 'High', color: 'red' },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex-1 flex items-center justify-center p-3 border rounded-lg cursor-pointer transition-colors ${
                    urgency === option.value
                      ? `border-${option.color}-500 bg-${option.color}-50 dark:bg-${option.color}-900`
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <input
                    type="radio"
                    name="urgency"
                    value={option.value}
                    checked={urgency === option.value}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="sr-only"
                  />
                  <span className="font-medium">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description (Optional)
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Provide additional details about the issue..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Add Photo (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-gray-400 dark:hover:border-gray-400 transition-colors">
              <Camera className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG up to 10MB</p>
              <input type="file" accept="image/*" className="hidden" />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            <Send className="w-5 h-5 mr-2" />
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}
