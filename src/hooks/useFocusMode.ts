import { useState, useEffect } from 'react';
import { storage } from '../utils/localStorage';

export const useFocusMode = () => {
  const [focusMode, setFocusMode] = useState(false);
  const [distractionFreeMode, setDistractionFreeMode] = useState(false);

  useEffect(() => {
    const savedFocusMode = storage.get('focusMode', false);
    setFocusMode(savedFocusMode);
  }, []);

  const toggleFocusMode = () => {
    const newMode = !focusMode;
    setFocusMode(newMode);
    storage.set('focusMode', newMode);
    
    // Reset distraction-free mode when exiting focus mode
    if (!newMode && distractionFreeMode) {
      setDistractionFreeMode(false);
    }
  };

  const toggleDistractionFree = () => {
    if (focusMode) {
      setDistractionFreeMode(!distractionFreeMode);
    }
  };

  return {
    focusMode,
    distractionFreeMode,
    toggleFocusMode,
    toggleDistractionFree,
  };
};