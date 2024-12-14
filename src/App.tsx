import React from 'react';
import { TaskProvider } from './store/TaskContext';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import RightSidebar from './components/RightSidebar';
import { UserGreeting } from './components/common/UserGreeting';
import { FocusModeToggle } from './components/focus/FocusModeToggle';
import { Footer } from './components/footer/Footer';
import { FAQ } from './components/faq/FAQ';
import { useFocusMode } from './hooks/useFocusMode';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const { focusMode, distractionFreeMode } = useFocusMode();

  return (
    <TaskProvider>
      <div className="flex min-h-screen bg-gray-100 flex-col">
        <div className="flex flex-1">
          <AnimatePresence mode="wait">
            <Sidebar
              collapsed={sidebarCollapsed || distractionFreeMode}
              toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
            <div className="flex-1 flex flex-col">
              <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                  <UserGreeting />
                  <div className="flex items-center space-x-4">
                    <FocusModeToggle />
                  </div>
                </div>
              </header>
              <Dashboard />
              <FAQ />
            </div>
            {!distractionFreeMode && <RightSidebar />}
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </TaskProvider>
  );
}

export default App;