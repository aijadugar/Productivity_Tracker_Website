import React from 'react';
import { Focus, EyeOff } from 'lucide-react';
import { useFocusMode } from '../../hooks/useFocusMode';

export const FocusModeToggle: React.FC = () => {
  const { focusMode, distractionFreeMode, toggleFocusMode, toggleDistractionFree } = useFocusMode();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={toggleFocusMode}
        className={`p-2 rounded-lg transition-colors ${
          focusMode ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'
        }`}
        title="Focus Mode"
      >
        <Focus size={20} />
      </button>
      {focusMode && (
        <button
          onClick={toggleDistractionFree}
          className={`p-2 rounded-lg transition-colors ${
            distractionFreeMode ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'
          }`}
          title="Distraction Free Mode"
        >
          <EyeOff size={20} />
        </button>
      )}
    </div>
  );
};