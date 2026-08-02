import { WorkItemData } from '../types/works';

/**
 * Flagship work that should remain visible even when Firestore is unavailable.
 * Firestore items with the same id take precedence when the catalog is merged.
 */
export const curatedWorks: WorkItemData[] = [
  {
    id: 'sourcearc',
    type: 'medium-feature',
    title: 'SourceArc',
    subtitle: 'One source. Every channel, in its own voice.',
    description:
      'Turn source material into channel-native drafts for X, LinkedIn, Reddit, and Medium—while keeping editorial control.',
    category: 'Collaborations with Bharat Mabbu',
    creatorName: 'Bharat Mabbu',
    order: 1,
    status: 'published',
    ctaText: 'Explore SourceArc',
    ctaLink: 'https://sourcearc.app',
  },
  {
    id: 'smara',
    type: 'medium-feature',
    title: 'Smara',
    subtitle: 'Give your agents a past.',
    description:
      'API-first hybrid memory for AI agents: an append-only record distilled into durable facts and a queryable knowledge graph.',
    category: 'Collaborations with Bharat Mabbu',
    creatorName: 'Bharat Mabbu',
    order: 2,
    status: 'published',
    ctaText: 'Explore Smara',
    ctaLink: 'https://smara.dev',
  },
];
