export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  deadline?: Date;
}

export interface Goal {
  id: string;
  title: string;
  deadline: Date;
  progress: number;
  tasks: string[]; // Task IDs
}

export interface TimerSettings {
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  volume: number;
}

export type TimerState = 'work' | 'shortBreak' | 'longBreak' | 'idle';