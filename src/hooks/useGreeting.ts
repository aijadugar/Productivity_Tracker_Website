import { useState, useEffect } from 'react';
import { storage } from '../utils/localStorage';

export const useGreeting = () => {
  const [userName, setUserName] = useState(storage.get('userName', ''));

  useEffect(() => {
    if (!userName) {
      const savedName = storage.get('userName', '');
      setUserName(savedName);
    }
  }, [userName]);

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const updateUserName = (name: string) => {
    setUserName(name);
    storage.set('userName', name);
  };

  const greeting = userName 
    ? `${getTimeBasedGreeting()}, ${userName}!`
    : getTimeBasedGreeting();

  return { greeting, userName, updateUserName };
};