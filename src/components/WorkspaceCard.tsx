import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WorkItemData } from '../types/works';

interface WorkspaceCardProps {
    item: WorkItemData;
}

export const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ item }) => {
    // Filter out "Collab" from category display
    const displayCategory = item.category === 'Collab' || item.category === 'Collaboration' ? null : item.category;

    // Aspect ratio for images to ensure "Standardize image dimensions"
    // Square (aspect-square) or Rectangular (aspect-video)
    const imageAspectClass = "aspect-[4/3]";

    const CardWrapper = ({ children, className }: { children: React.ReactNode; className: string }) => {
        if (item.appId) {
            return (
                <Link
                    to={`/works/${item.appId}`}
                    className={`${className} hover:shadow-xl hover:-translate-y-1 focus:ring-2 focus:ring-prajana-purple focus:ring-opacity-50`}
                >
                    {children}
                </Link>
            );
        }

        if (item.ctaLink) {
            const isExternal = item.ctaLink.startsWith('http');
            return (
                <a
                    href={item.ctaLink}
                    target={isExternal ? '_blank' : '_self'}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={`${className} hover:shadow-xl hover:-translate-y-1 focus:ring-2 focus:ring-prajana-purple focus:ring-opacity-50`}
                >
                    {children}
                </a>
            );
        }

        return <div className={className}>{children}</div>;
    };

    return (
        <CardWrapper
            className={`
        group relative flex flex-col h-full bg-white dark:bg-prajana-deep-blue 
        rounded-2xl overflow-hidden border border-prajana-purple/5 dark:border-prajana-ice-blue/5
        shadow-sm transition-all duration-300
      `}
        >
            {/* Image Section */}
            {item.imageUrl && (
                <div className={`w-full relative overflow-hidden ${imageAspectClass}`}>
                    <div className="absolute inset-0 bg-gray-100 dark:bg-prajana-deep-blue/50 animate-pulse" /> {/* Placeholder */}
                    <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-prajana-deep-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-6 space-y-4">

                {/* Header */}
                <div>
                    {displayCategory && (
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-prajana-purple dark:text-prajana-cyan uppercase bg-prajana-purple/5 dark:bg-prajana-cyan/5 rounded-full">
                            {displayCategory}
                        </span>
                    )}
                    <h3 className="text-xl font-bold text-prajana-deep-blue dark:text-white group-hover:text-prajana-purple dark:group-hover:text-prajana-cyan transition-colors">
                        {item.title}
                    </h3>
                    {/* Subtitle if available (from LargeFeature) */}
                    {(item as any).subtitle && (
                        <p className="mt-1 text-sm font-medium text-prajana-light-purple dark:text-prajana-ice-blue/60">
                            {(item as any).subtitle}
                        </p>
                    )}
                </div>

                {/* Description */}
                {item.description && (
                    <p className="flex-grow text-sm leading-relaxed text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70">
                        {item.description}
                    </p>
                )}

                {/* Footer / CTA */}
                <div className="pt-4 mt-auto flex items-center justify-between border-t border-prajana-purple/5 dark:border-prajana-ice-blue/5">
                    {item.ctaText && item.ctaLink ? (
                        <a
                            href={item.ctaLink}
                            target={item.ctaLink.startsWith('http') ? '_blank' : '_self'}
                            rel={item.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center text-sm font-semibold text-prajana-purple dark:text-prajana-light-purple group-hover:translate-x-1 transition-transform hover:text-prajana-light-purple dark:hover:text-prajana-ice-blue"
                        >
                            {item.ctaText} <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                    ) : item.ctaText ? (
                        <span className="inline-flex items-center text-sm font-semibold text-prajana-purple dark:text-prajana-light-purple group-hover:translate-x-1 transition-transform">
                            {item.ctaText} <ArrowRight className="ml-2 w-4 h-4" />
                        </span>
                    ) : (
                        <span className="inline-flex items-center text-sm font-semibold text-prajana-deep-blue/40 dark:text-prajana-ice-blue/40 group-hover:text-prajana-purple dark:group-hover:text-prajana-cyan transition-colors">
                            Read More
                        </span>
                    )}
                </div>
            </div>
        </CardWrapper>
    );
};
