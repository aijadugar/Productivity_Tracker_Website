import React from 'react';
import { Task } from '../../types';
import { Trash2, Edit2, GripVertical } from 'lucide-react';

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  onToggle: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onEdit, onToggle }) => {
  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div className="group flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="cursor-move opacity-0 group-hover:opacity-100 mr-2">
        <GripVertical size={16} className="text-gray-400" />
      </div>
      
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      
      <div className="flex-1">
        <span className={task.completed ? 'line-through text-gray-400' : ''}>
          {task.title}
        </span>
        <span className={`ml-2 px-2 py-1 text-xs rounded-full ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>

      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onEdit(task)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <Edit2 size={16} className="text-gray-600" />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <Trash2 size={16} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
