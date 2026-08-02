import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WorkItemData } from '../types/works';

interface WorkspaceCardProps {
    item: WorkItemData;
}

interface CardWrapperProps extends WorkspaceCardProps {
    children: React.ReactNode;
    className: string;
}

function CardWrapper({ item, children, className }: CardWrapperProps) {
    const interactiveClasses = `${className} hover:shadow-xl hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-prajana-purple`;
    if (item.appId) return <Link to={`/works/${item.appId}`} className={interactiveClasses}>{children}</Link>;
    if (item.ctaLink) {
        const isExternal = item.ctaLink.startsWith('http');
        return <a href={item.ctaLink} target={isExternal ? '_blank' : '_self'} rel={isExternal ? 'noopener noreferrer' : undefined} className={interactiveClasses}>{children}</a>;
    }
    return <div className={className}>{children}</div>;
}

export const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ item }) => {
    // Filter out "Collab" from category display
    const displayCategory = item.category?.toLowerCase().startsWith('collab') ? null : item.category;

    // Aspect ratio for images to ensure "Standardize image dimensions"
    // Square (aspect-square) or Rectangular (aspect-video)
    const imageAspectClass = "aspect-[4/3]";

    return (
        <CardWrapper
            item={item}
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
            {!item.imageUrl && (
                <div className="work-art" aria-hidden="true">
                    <span className="work-art-mark">{item.title.split(/\s+/).map(word => word[0]).join('').slice(0, 2).toUpperCase()}</span>
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
                    {item.subtitle && (
                        <p className="mt-1 text-sm font-medium text-prajana-light-purple dark:text-prajana-ice-blue/60">
                            {item.subtitle}
                        </p>
                    )}
                    {item.creatorName && (
                        <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-prajana-deep-blue/50 dark:text-prajana-ice-blue/55">
                            <Sparkles className="h-3.5 w-3.5 text-prajana-orange" aria-hidden="true" />
                            Built with {item.creatorName}
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
                        <span className="inline-flex items-center text-sm font-semibold text-prajana-purple dark:text-prajana-light-purple group-hover:translate-x-1 transition-transform group-hover:text-prajana-light-purple dark:group-hover:text-prajana-ice-blue">
                            {item.ctaText} <ArrowUpRight className="ml-2 w-4 h-4" />
                        </span>
                    ) : item.ctaText ? (
                        <span className="inline-flex items-center text-sm font-semibold text-prajana-purple dark:text-prajana-light-purple group-hover:translate-x-1 transition-transform">
                            {item.ctaText} <ArrowUpRight className="ml-2 w-4 h-4" />
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
