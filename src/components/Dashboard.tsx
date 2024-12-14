import React from 'react';
import { CheckCircle, Award, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Tasks Completed', value: '4/10', icon: <CheckCircle className="text-emerald-500" /> },
    { label: 'Current Streak', value: '3 days', icon: <Award className="text-amber-500" /> },
    { label: 'Productivity Score', value: '85%', icon: <TrendingUp className="text-blue-500" /> },
  ];

  return (
    <div className="flex-1 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6 flex items-center">
            <div className="p-3 rounded-lg bg-gray-50">{stat.icon}</div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Today's Tasks</h2>
          <div className="space-y-3">
            {['Complete project proposal', 'Team meeting', 'Review code', 'Update documentation'].map((task) => (
              <div key={task} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <input type="checkbox" className="mr-3" />
                <span>{task}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Daily Quote</h2>
          <blockquote className="italic text-gray-600">
            "The only way to do great work is to love what you do."
            <footer className="text-sm text-gray-500 mt-2">- Steve Jobs</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;