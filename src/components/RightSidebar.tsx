import React from 'react';
import { Trophy, Star } from 'lucide-react';

const RightSidebar = () => {
  const achievements = [
    { title: 'Early Bird', description: 'Completed 5 tasks before noon', icon: <Star className="text-yellow-500" /> },
    { title: 'Productivity Master', description: '100% completion rate', icon: <Trophy className="text-purple-500" /> },
  ];

  return (
    <div className="w-80 bg-gradient-to-r from-blue-50 to-purple-100 p-6 border-l border-gray-200 h-screen overflow-y-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Achievements</h2>
      
      <div className="space-y-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center mb-2">
              <div className="text-2xl">{achievement.icon}</div>
              <h3 className="font-semibold text-lg ml-3 text-gray-800">{achievement.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{achievement.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Today's Focus</h2>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300">
          <p className="text-lg font-medium italic">
            "Success is not final, failure is not fatal: it is the courage to continue that counts."
          </p>
          <p className="text-sm mt-2 opacity-90">- Winston Churchill</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
