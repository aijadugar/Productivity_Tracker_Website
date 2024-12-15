export interface Task {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  createdAt: Date; // Ensure this property exists in the type definition
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