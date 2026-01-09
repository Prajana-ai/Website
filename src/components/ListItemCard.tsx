import React from 'react';
import { ListItemWork } from '../types/works';

interface ListItemCardProps {
  item: ListItemWork;
}

export const ListItemCard: React.FC<ListItemCardProps> = ({ item }) => {
  return (
    <div className="flex items-center p-4 bg-white dark:bg-prajana-deep-blue rounded-lg shadow-sm border border-prajana-purple/5 dark:border-prajana-ice-blue/5 hover:bg-prajana-purple/5 dark:hover:bg-prajana-ice-blue/5 transition-colors">
      {item.iconUrl && (
        <img src={item.iconUrl} alt={`${item.title} icon`} className="w-12 h-12 rounded-md mr-4" />
      )}
      <div className="flex-grow">
        <h4 className="text-md font-semibold text-prajana-deep-blue dark:text-white">{item.title}</h4>
        {item.description && (
          <p className="text-xs text-prajana-deep-blue/60 dark:text-prajana-ice-blue/60">{item.description}</p>
        )}
      </div>
      {item.price && (
        <a
          href={item.ctaLink || '#'}
          className={`ml-4 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors 
            ${item.price.toLowerCase() === 'get'
              ? 'bg-prajana-purple/10 text-prajana-purple hover:bg-prajana-purple/20 dark:bg-prajana-purple dark:text-white dark:hover:bg-prajana-light-purple'
              : 'bg-prajana-ice-blue text-prajana-deep-blue hover:bg-prajana-cyan/20 dark:bg-prajana-deep-blue dark:text-prajana-ice-blue dark:hover:bg-prajana-deep-blue/80 border border-prajana-deep-blue/10 dark:border-prajana-ice-blue/10'}
          `}
        >
          {item.price}
        </a>
      )}
    </div>
  );
};
