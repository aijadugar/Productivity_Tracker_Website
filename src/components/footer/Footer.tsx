import React from 'react';
import { Newsletter } from './Newsletter';
import { QuickLinks } from './QuickLinks';
import { SocialLinks } from './SocialLinks';
import { AnimatedTransition } from '../common/AnimatedTransition';

export const Footer: React.FC = () => {
  return (
    <AnimatedTransition>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Quick Links</h3>
              <QuickLinks />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Subscribe to Newsletter</h3>
              <Newsletter />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Follow Us</h3>
              <SocialLinks />
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-6">
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} Productivity Tracker Website. All rights reserved.
            </p>
            <p className="text-center text-gray-400 text-sm mt-2">
              Built with ♥ by the Team Codedot.
            </p>
          </div>
        </div>
      </footer>
    </AnimatedTransition>
  );
};
