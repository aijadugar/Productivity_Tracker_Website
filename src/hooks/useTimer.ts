import { useState, useEffect, useCallback } from 'react';
import { TimerState, TimerSettings } from '../types';

export const useTimer = (settings: TimerSettings) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerState, setTimerState] = useState<TimerState>('idle');
  const [isActive, setIsActive] = useState(false);

  const getDuration = useCallback((state: TimerState) => {
    switch (state) {
      case 'work':
        return settings.workDuration * 60;
      case 'shortBreak':
        return settings.shortBreakDuration * 60;
      case 'longBreak':
        return settings.longBreakDuration * 60;
      default:
        return 0;
    }
  }, [settings]);

  const startTimer = useCallback((state: TimerState) => {
    setTimerState(state);
    setTimeLeft(getDuration(state));
    setIsActive(true);
  }, [getDuration]);

  const pauseTimer = () => setIsActive(false);
  const resumeTimer = () => setIsActive(true);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(getDuration(timerState));
  };

  useEffect(() => {
    let interval: number;

    if (isActive && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      // Play notification sound here
      const audio = new Audio('/notification.mp3');
      audio.volume = settings.volume;
      audio.play();
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, settings.volume]);

  return {
    timeLeft,
    timerState,
    isActive,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
  };
};