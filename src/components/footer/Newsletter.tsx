import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
    // Here you would typically handle the newsletter subscription
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Subscribe to our newsletter</h3>
      <p className="text-gray-600">Get productivity tips and updates in your inbox</p>
      <form onSubmit={handleSubmit} className="mt-2">
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-gray-500 text-white rounded-r-lg hover:bg-gray-600 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
      {status === 'success' && (
        <p className="text-green-600 text-sm">Thanks for subscribing!</p>
      )}
    </div>
  );
};