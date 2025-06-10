import React from 'react';

interface SectionTitleProps {
  title: string;
  seeAllLink?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, seeAllLink }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
    {seeAllLink && (
      <a href={seeAllLink} className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
        See All
      </a>
    )}
  </div>
);
