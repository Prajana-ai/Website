import React from 'react';
import { Link } from 'react-router-dom';
import { MediumFeatureWork } from '../types/works';

interface MediumFeatureCardProps {
  item: MediumFeatureWork;
}

export const MediumFeatureCard: React.FC<MediumFeatureCardProps> = ({ item }) => {
  const cardInnerContent = (
    <>
      <div className="md:w-2/5 p-6 flex flex-col justify-center order-2 md:order-1">
        {item.category && (
          <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold uppercase mb-1">
            {item.category}
          </p>
        )}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {item.description}
          </p>
        )}
        {item.ctaText && item.ctaLink && (
          <a 
            href={item.ctaLink} 
            className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold hover:underline self-start relative z-10"
            onClick={(e) => {
              // If the ctaLink is meant for external navigation or specific action,
              // stop propagation to prevent the parent Link from navigating.
              e.stopPropagation();
            }}
            target={item.ctaLink.startsWith('http') ? '_blank' : undefined}
            rel={item.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {item.ctaText}
          </a>
        )}
      </div>
      {item.imageUrl && (
        <div className="md:w-3/5 order-1 md:order-2">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
    </>
  );

  const commonClasses = "bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md group flex flex-col md:flex-row";

  if (item.appId) {
    return (
      <Link to={`/works/${item.appId}`} className={`${commonClasses} block hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}>
        {cardInnerContent}
      </Link>
    );
  }

  return (
    <div className={commonClasses}>
      {cardInnerContent}
    </div>
  );
};
