import React from 'react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl relative">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
          {number}
        </div>
        <div className="text-indigo-600 dark:text-indigo-400">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}