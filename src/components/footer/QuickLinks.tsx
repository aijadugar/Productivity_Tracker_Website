import React from 'react';
import { ExternalLink } from 'lucide-react';

export const QuickLinks: React.FC = () => {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-gray-500 hover:text-gray-600 flex items-center space-x-1 group"
            >
              <span>{link.label}</span>
              <ExternalLink
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};