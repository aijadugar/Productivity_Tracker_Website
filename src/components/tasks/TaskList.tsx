import React, { useState } from 'react';
import { Task } from '../../types';
import TaskItem from './TaskItem';
import { v4 as uuidv4 } from 'uuid';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<'low' | 'medium' | 'high'>('low');

  const addTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: uuidv4(),
        title: newTaskTitle,
        priority: newTaskPriority,
        completed: false,
        createdAt: new Date(), // Add the current timestamp
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };
  

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (updatedTask: Task) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      {/* Input for adding new tasks */}
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          placeholder="Enter task title..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-3 py-2"
        />
        <select
          value={newTaskPriority}
          onChange={(e) => setNewTaskPriority(e.target.value as 'low' | 'medium' | 'high')}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>

      {/* Task list */}
      <div className="space-y-3">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onEdit={editTask}
            onToggle={toggleTaskCompletion}
          />
        ))}
        {tasks.length === 0 && <p className="text-gray-500">No tasks yet. Add some!</p>}
      </div>
    </div>
  );
};

export default TaskList;
