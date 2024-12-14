import React from 'react';
import { FAQItem } from './FAQItem';
import { AnimatedTransition } from '../common/AnimatedTransition';

const faqItems = [
  {
    question: 'How do I get started with the Productivity Tracker?',
    answer: 'Simply create an account and start adding your tasks. You can use the Pomodoro timer to stay focused and track your progress through the dashboard.',
  },
  {
    question: 'What is the Pomodoro Technique?',
    answer: 'The Pomodoro Technique is a time management method that uses a timer to break work into focused 25-minute intervals, separated by short breaks.',
  },
  {
    question: 'Can I customize the timer settings?',
    answer: 'Yes! You can adjust the work duration, break duration, and notification settings to match your preferred workflow.',
  },
  {
    question: 'How does the Focus Mode work?',
    answer: 'Focus Mode minimizes distractions by hiding non-essential elements and highlighting your current task. You can also enable Distraction-Free Mode for even fewer distractions.',
  },
];

export const FAQ: React.FC = () => {
  return (
    <AnimatedTransition>
      <section className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </AnimatedTransition>
  );
};