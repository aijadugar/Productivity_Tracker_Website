import React from 'react';
import { ListTodo, Timer, LineChart, ChevronLeft } from 'lucide-react';

const Sidebar = ({ collapsed, toggleSidebar }: { collapsed: boolean; toggleSidebar: () => void }) => {
  const menuItems = [
    { icon: <ListTodo size={20} />, label: 'Tasks', href: '#tasks' },
    { icon: <Timer size={20} />, label: 'Pomodoro', href: '#pomodoro' },
    { icon: <LineChart size={20} />, label: 'Performance', href: '#performance' },
  ];

  return (
    <div
      className={`bg-slate-800 text-white h-screen transition-all duration-300 ease-in-out ${collapsed ? 'w-16' : 'w-64'}`}
    >
      {/* Sidebar Header */}
      <div className="p-4 flex justify-between items-center">
        {!collapsed && <h2 className="text-xl font-semibold text-white">Menu</h2>}
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-slate-700 rounded-lg focus:outline-none"
        >
          <ChevronLeft
            className={`transform transition-transform ${collapsed ? 'rotate-180' : ''}`}
            size={24}
          />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-8">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
          >
            <span className="mr-3">{item.icon}</span>
            {!collapsed && <span className="text-lg">{item.label}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
