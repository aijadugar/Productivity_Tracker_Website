import React from 'react';
import { useTimer } from '../../hooks/useTimer';
import { Play, Pause, RefreshCw, Settings } from 'lucide-react';

const PomodoroTimer: React.FC = () => {
  const settings = {
    workDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 15,
    volume: 0.7,
  };

  const {
    timeLeft,
    timerState,
    isActive,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
  } = useTimer(settings);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = timeLeft / (settings.workDuration * 60) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Pomodoro Timer</h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings size={20} className="text-gray-600" />
        </button>
      </div>

      <div className="relative w-48 h-48 mx-auto mb-6">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="88"
            className="stroke-current text-gray-200"
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="96"
            cy="96"
            r="88"
            className="stroke-current text-blue-500"
            strokeWidth="12"
            fill="none"
            strokeDasharray={553}
            strokeDashoffset={553 - (553 * progress) / 100}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-4xl font-bold">{formatTime(timeLeft)}</span>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        {!isActive ? (
          <button
            onClick={() => timerState === 'idle' ? startTimer('work') : resumeTimer()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <Play size={20} />
          </button>
        ) : (
          <button
            onClick={pauseTimer}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            <Pause size={20} />
          </button>
        )}
        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          <RefreshCw size={20} />
        </button>
      </div>
    </div>
  );
};