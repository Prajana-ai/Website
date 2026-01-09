import React from 'react';

interface SectionTitleProps {
  title: string;
  seeAllLink?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, seeAllLink }) => (
  <div className="flex justify-between items-center mb-8 border-b border-prajana-deep-blue/10 dark:border-prajana-ice-blue/10 pb-4">
    <h2 className="text-3xl font-bold text-prajana-deep-blue dark:text-white">{title}</h2>
    {seeAllLink && (
      <a href={seeAllLink} className="text-sm font-semibold text-prajana-purple dark:text-prajana-cyan hover:underline">
        See All
      </a>
    )}
  </div>
);
