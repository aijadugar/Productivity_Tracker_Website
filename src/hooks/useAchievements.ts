import { useState, useEffect } from 'react';
import { Task } from '../types';

interface Achievement {
  id: string;
  title: string;
  description: string;
  condition: (tasks: Task[]) => boolean;
  unlocked: boolean;
}

export const useAchievements = (tasks: Task[]) => {
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 'early-bird',
      title: 'Early Bird',
      description: 'Complete 3 tasks before noon',
      condition: (tasks) => tasks.filter(t => 
        t.completed && 
        new Date(t.createdAt).getHours() < 12
      ).length >= 3,
      unlocked: false
    },
    {
      id: 'productivity-master',
      title: 'Productivity Master',
      description: 'Complete all tasks for the day',
      condition: (tasks) => tasks.length > 0 && tasks.every(t => t.completed),
      unlocked: false
    }
  ]);

  useEffect(() => {
    setAchievements(prev => prev.map(achievement => ({
      ...achievement,
      unlocked: achievement.condition(tasks)
    })));
  }, [tasks]);

  return achievements;
};