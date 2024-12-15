import React, { Suspense, useState } from 'react';
import { TaskProvider } from './store/TaskContext';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { UserGreeting } from './components/common/UserGreeting';
import { FocusModeToggle } from './components/focus/FocusModeToggle';
import { Footer } from './components/footer/Footer';
import { useFocusMode } from './hooks/useFocusMode';
import { AnimatePresence } from 'framer-motion';

// Lazy-loaded components
const RightSidebar = React.lazy(() => import('./components/RightSidebar'));
const FAQ = React.lazy(() =>
  import('./components/faq/FAQ').then((module) => ({ default: module.FAQ }))
);

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { focusMode, distractionFreeMode } = useFocusMode();

  // Toggles the state of the sidebar
  const toggleSidebar = () => setSidebarCollapsed((prev) => !prev);

  return (
    <TaskProvider>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Main Content */}
        <div className="flex flex-1">
          <AnimatePresence mode="wait">
            {/* Sidebar */}
            <Sidebar
              collapsed={sidebarCollapsed || distractionFreeMode}
              toggleSidebar={toggleSidebar}
              aria-label="Main navigation sidebar"
            />

            {/* Main Section */}
            <div className="flex-1 flex flex-col">
              {/* Header */}
              <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                  <UserGreeting />
                  <div className="flex items-center space-x-4">
                    <FocusModeToggle />
                  </div>
                </div>
              </header>

              {/* Content */}
              <main className="flex-1 p-4">
                <Dashboard />
                <Suspense fallback={<div className="text-center">Loading FAQ...</div>}>
                  <FAQ />
                </Suspense>
              </main>
            </div>

            {/* Right Sidebar */}
            {!distractionFreeMode && (
              <Suspense fallback={<div className="text-center">Loading Right Sidebar...</div>}>
                <RightSidebar aria-label="Additional information sidebar" />
              </Suspense>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </TaskProvider>
  );
}

export default React.memo(App);
