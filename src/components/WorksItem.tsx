import React from 'react';
import { ArrowRight } from 'lucide-react';
import { theme } from '../theme';
import { FeatureList, ScreenshotGrid, PricingCard } from './shared';

interface WorksItemProps {
  title: string;
  description: string;
  screenshots: string[];
  features: string[];
  pricing?: {
    free?: string;
    pro?: string;
  };
}

export function WorksItem({
  title,
  description,
  screenshots,
  features,
  pricing,
}: WorksItemProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-20" />
        
        {/* Hero Image Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {screenshots.slice(0, 2).map((screenshot, i) => (
              <img
                key={i}
                src={screenshot}
                alt={`${title} screenshot ${i + 1}`}
                className="rounded-t-lg w-full h-64 object-cover"
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

          {/* Features */}
          <div className="space-y-4 mb-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Features</h4>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-indigo-500" />
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          {pricing && (
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pricing.free && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white">Free</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{pricing.free}</p>
                  </div>
                )}
                {pricing.pro && (
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900 rounded-lg">
                    <h5 className="text-sm font-semibold text-white">Pro</h5>
                    <p className="text-sm text-indigo-100">{pricing.pro}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
              Learn More <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
