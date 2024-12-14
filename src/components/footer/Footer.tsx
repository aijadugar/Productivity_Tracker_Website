import React from 'react';
import { Newsletter } from './Newsletter';
import { QuickLinks } from './QuickLinks';
import { SocialLinks } from './SocialLinks';
import { AnimatedTransition } from '../common/AnimatedTransition';

export const Footer: React.FC = () => {
  return (
    <AnimatedTransition>
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <QuickLinks />
            <Newsletter />
            <SocialLinks />
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Productivity Tracker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </AnimatedTransition>
  );
};