import React from 'react';
import { LargeFeatureWork } from '../types/works';

interface LargeFeatureCardProps {
  item: LargeFeatureWork;
}

export const LargeFeatureCard: React.FC<LargeFeatureCardProps> = ({ item }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-white dark:bg-prajana-deep-blue border border-prajana-purple/5 dark:border-prajana-ice-blue/5 group">
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
      <div className={`absolute inset-0 flex flex-col justify-end p-6 ${item.imageUrl ? 'bg-gradient-to-t from-prajana-deep-blue/90 to-transparent' : 'bg-white dark:bg-prajana-deep-blue'}`}>
        {item.subtitle && (
          <p className={`text-sm mb-1 ${item.imageUrl ? 'text-prajana-ice-blue/80' : 'text-prajana-purple dark:text-prajana-ice-blue/60'}`}>
            {item.subtitle}
          </p>
        )}
        <h2 className={`text-3xl font-bold ${item.imageUrl ? 'text-white' : 'text-prajana-deep-blue dark:text-white'}`}>
          {item.title}
        </h2>
        {item.description && (
          <p className={`mt-2 text-sm ${item.imageUrl ? 'text-prajana-ice-blue/80' : 'text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70'}`}>
            {item.description}
          </p>
        )}
        {item.ctaText && item.ctaLink && (
          <a
            href={item.ctaLink}
            target={item.ctaLink.startsWith('http') ? '_blank' : '_self'}
            rel={item.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="mt-4 inline-block bg-prajana-purple text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-prajana-light-purple transition-colors self-start shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200"
          >
            {item.ctaText}
          </a>
        )}
      </div>
    </div>
  );
};
