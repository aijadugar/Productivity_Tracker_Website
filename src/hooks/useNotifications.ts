import { useEffect, useState } from 'react';
import { Task } from '../types';

export const useNotifications = () => {
  const [permission, setPermission] = useState<NotificationPermission>('default');

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if ('Notification' in window) {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result;
    }
    return 'denied';
  };

  const sendNotification = (title: string, options?: NotificationOptions) => {
    if (permission === 'granted') {
      return new Notification(title, options);
    }
    return null;
  };

  const notifyTaskDue = (task: Task) => {
    if (task.deadline) {
      const timeUntilDue = new Date(task.deadline).getTime() - Date.now();
      if (timeUntilDue > 0) {
        setTimeout(() => {
          sendNotification(`Task Due: ${task.title}`, {
            body: 'This task is due now!',
            icon: '/notification-icon.png',
          });
        }, timeUntilDue);
      }
    }
  };

  return { permission, requestPermission, sendNotification, notifyTaskDue };
};