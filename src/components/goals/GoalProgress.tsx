import React from 'react';
import { Goal } from '../../types';
import { Target } from 'lucide-react';

interface GoalProgressProps {
  goal: Goal;
}

const GoalProgress: React.FC<GoalProgressProps> = ({ goal }) => {
  const daysLeft = Math.ceil((new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center mb-3">
        <Target className="text-purple-500 mr-2" size={20} />
        <h3 className="font-semibold">{goal.title}</h3>
      </div>

      <div className="mb-2">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>{goal.progress}% Complete</span>
          <span>{daysLeft} days left</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-500 rounded-full h-2 transition-all duration-300"
            style={{ width: `${goal.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};