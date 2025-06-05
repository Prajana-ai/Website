import React from 'react';
import { SmallImageWork } from '../types/works';

interface SmallImageCardProps {
  item: SmallImageWork;
}

export const SmallImageCard: React.FC<SmallImageCardProps> = ({ item }) => {
  return (
    <div 
      className="relative rounded-lg overflow-hidden shadow-lg h-64 group bg-cover bg-center"
      style={{ backgroundImage: item.imageUrl ? `url(${item.imageUrl})` : undefined }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 hover:from-black/90 hover:to-black/30 transition-all duration-300">
        <div className="absolute bottom-0 left-0 p-4">
          {item.category && (
            <p className="text-xs text-indigo-300 font-semibold uppercase mb-1">
              {item.category}
            </p>
          )}
          <h3 className="text-lg font-bold text-white mb-1">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-xs text-gray-300">
              {item.description}
            </p>
          )}
        </div>
      </div>
      {item.ctaLink && (
        <a href={item.ctaLink} className="absolute inset-0" aria-label={item.title}></a>
      )}
    </div>
  );
};
