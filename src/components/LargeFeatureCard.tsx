import React from 'react';
import { LargeFeatureWork } from '../types/works';

interface LargeFeatureCardProps {
  item: LargeFeatureWork;
}

export const LargeFeatureCard: React.FC<LargeFeatureCardProps> = ({ item }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 group">
      {item.imageUrl && (
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
      <div className={`absolute inset-0 flex flex-col justify-end p-6 ${item.imageUrl ? 'bg-gradient-to-t from-black/70 to-transparent' : 'bg-gray-100 dark:bg-gray-700'}`}>
        {item.subtitle && (
          <p className={`text-sm mb-1 ${item.imageUrl ? 'text-gray-200' : 'text-gray-500 dark:text-gray-400'}`}>
            {item.subtitle}
          </p>
        )}
        <h2 className={`text-3xl font-bold ${item.imageUrl ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
          {item.title}
        </h2>
        {item.description && (
          <p className={`mt-2 text-sm ${item.imageUrl ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}`}>
            {item.description}
          </p>
        )}
        {item.ctaText && item.ctaLink && (
          <a 
            href={item.ctaLink} 
            className="mt-4 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors self-start"
          >
            {item.ctaText}
          </a>
        )}
      </div>
    </div>
  );
};
