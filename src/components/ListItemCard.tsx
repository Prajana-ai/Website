import React from 'react';
import { ListItemWork } from '../types/works';

interface ListItemCardProps {
  item: ListItemWork;
}

export const ListItemCard: React.FC<ListItemCardProps> = ({ item }) => {
  return (
    <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      {item.iconUrl && (
        <img src={item.iconUrl} alt={`${item.title} icon`} className="w-12 h-12 rounded-md mr-4" />
      )}
      <div className="flex-grow">
        <h4 className="text-md font-semibold text-gray-900 dark:text-white">{item.title}</h4>
        {item.description && (
          <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
        )}
      </div>
      {item.price && (
        <a 
          href={item.ctaLink || '#'}
          className={`ml-4 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors 
            ${item.price.toLowerCase() === 'get' 
              ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-700 dark:text-indigo-100 dark:hover:bg-indigo-600'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'}
          `}
        >
          {item.price}
        </a>
      )}
    </div>
  );
};
