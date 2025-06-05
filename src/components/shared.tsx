import React from 'react';
import { theme } from '../theme';
import { ArrowRight } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className={`${theme.components.card.base} ${theme.components.card.padding} ${theme.components.card.background} ${theme.components.card.border} ${theme.components.card.hover}`}>
      <div className="flex items-center gap-3 mb-4">
        {feature.icon && <div className="text-2xl">{feature.icon}</div>}
        <h3 className={`${theme.components.heading.base} ${theme.components.heading.sizes.h4} text-text dark:text-textDark`}>
          {feature.title}
        </h3>
      </div>
      <p className={`${theme.components.text.base} ${theme.components.text.sizes.base} text-textLight dark:text-textLight`}>
        {feature.description}
      </p>
    </div>
  );
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

export function PricingCard({ tier }: { tier: PricingTier }) {
  const isFeatured = tier.isFeatured || false;
  const background = isFeatured ? 'bg-primary-light dark:bg-primary-dark' : 'bg-white dark:bg-gray-800';
  const border = isFeatured ? 'border-primary' : 'border-gray-200 dark:border-gray-700';

  return (
    <div className={`${theme.components.card.base} ${theme.components.card.padding} ${background} ${border} ${theme.components.card.hover}`}>
      <h4 className={`${theme.components.heading.base} ${theme.components.heading.sizes.h4} text-text dark:text-textDark mb-4`}>
        {tier.name}
      </h4>
      <p className={`${theme.components.text.base} ${theme.components.text.sizes.lg} text-text dark:text-textDark mb-6`}>
        {tier.price}
      </p>
      <ul className="space-y-3 mb-6">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span className={`${theme.components.text.base} ${theme.components.text.sizes.base} text-textLight dark:text-textLight`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <button className={`${theme.components.button.primary} w-full`}>
        Choose Plan <ArrowRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
}

export interface FeatureListProps {
  features: string[];
  title?: string;
}

export function FeatureList({ features, title }: FeatureListProps) {
  return (
    <div className="space-y-4">
      {title && (
        <h4 className={`${theme.components.heading.base} ${theme.components.heading.sizes.h4} text-text dark:text-textDark mb-4`}>
          {title}
        </h4>
      )}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span className={`${theme.components.text.base} ${theme.components.text.sizes.base} text-textLight dark:text-textLight`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface ScreenshotGridProps {
  screenshots: string[];
  title?: string;
}

export function ScreenshotGrid({ screenshots, title }: ScreenshotGridProps) {
  return (
    <div className="space-y-4">
      {title && (
        <h4 className={`${theme.components.heading.base} ${theme.components.heading.sizes.h4} text-text dark:text-textDark mb-4`}>
          {title}
        </h4>
      )}
      <div className="grid grid-cols-2 gap-4">
        {screenshots.map((screenshot, index) => (
          <img
            key={index}
            src={screenshot}
            alt={`Screenshot ${index + 1}`}
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}
