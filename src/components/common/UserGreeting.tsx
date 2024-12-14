import React, { useState } from 'react';
import { useGreeting } from '../../hooks/useGreeting';
import { Edit2, Check } from 'lucide-react';
import { AnimatedTransition } from './AnimatedTransition';

export const UserGreeting: React.FC = () => {
  const { greeting, userName, updateUserName } = useGreeting();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(userName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUserName(newName.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <AnimatedTransition>
        {isEditing ? (
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              autoFocus
            />
            <button
              type="submit"
              className="ml-2 p-1 hover:bg-gray-100 rounded-full"
            >
              <Check size={18} className="text-green-500" />
            </button>
          </form>
        ) : (
          <>
            <h1 className="text-2xl font-bold">{greeting}</h1>
            {userName && (
              <button
                onClick={() => setIsEditing(true)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <Edit2 size={16} className="text-gray-500" />
              </button>
            )}
          </>
        )}
      </AnimatedTransition>
    </div>
  );
};