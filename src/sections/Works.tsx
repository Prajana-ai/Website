import { WorkItemData, LargeFeatureWork, MediumFeatureWork, ListItemWork, SmallImageWork } from '../types/works';
import { LargeFeatureCard } from '../components/LargeFeatureCard';
import { MediumFeatureCard } from '../components/MediumFeatureCard';
import { ListItemCard } from '../components/ListItemCard';
import { SmallImageCard } from '../components/SmallImageCard';

const placeholderWorksData: WorkItemData[] = [
    // Type 1: Large Feature Card
  {
    id: 'award-winner-2025',
    type: 'large-feature',
    title: 'Meet the 2025 prajana.ai Design Award Winners',
    subtitle: 'WWDC25',
    imageUrl: 'https://via.placeholder.com/1200x600/cccccc/888888?text=Award+Winner+Banner',
    ctaText: 'Learn More',
    ctaLink: '#',
  } as LargeFeatureWork,

  // Type 2: Medium Feature Cards
  {
    id: 'apple-arcade-love-way',
    type: 'medium-feature',
    category: 'APPLE ARCADE',
    title: 'Love Your Own Way',
    description: 'How Wylde Flowers gives an authentic voice to LGBTQ+ relationships.',
    imageUrl: 'https://via.placeholder.com/600x400/f0f0f0/777777?text=Love+Your+Way',
    ctaText: 'Read Story',
    ctaLink: '#',
  } as MediumFeatureWork,
  {
    id: 'mac-essentials',
    type: 'medium-feature',
    category: 'GET STARTED',
    title: 'Mac Essentials',
    description: 'Get amazing games and the best apps for every task.',
    imageUrl: 'https://via.placeholder.com/600x400/e0e0e0/666666?text=Mac+Essentials',
    ctaText: 'Discover Apps',
    ctaLink: '#',
  } as MediumFeatureWork,
  {
    id: 'major-update-designs',
    type: 'medium-feature',
    category: 'MAJOR UPDATE',
    title: 'Turn Ideas Into Designs',
    description: 'Sketch simplifies creating and prototyping.',
    imageUrl: 'https://via.placeholder.com/600x400/d0d0d0/555555?text=Ideas+Into+Designs',
    ctaText: 'Explore Sketch',
    ctaLink: '#', // This could be an external link or removed if appId handles primary navigation
    appId: 'sketch-design-toolkit', // Added for internal navigation
  } as MediumFeatureWork,

  // Type 3: List Item Cards
  {
    id: 'focus-timer',
    type: 'list-item',
    title: 'Focus - Productivity Timer',
    description: 'Time management with Po...',
    iconUrl: 'https://via.placeholder.com/64x64/a0e0ff/000000?text=F',
    price: 'Get',
    ctaLink: '#',
  } as ListItemWork,
  {
    id: 'bbedit',
    type: 'list-item',
    title: 'BBEdit',
    description: 'Legendary text and code editor.',
    iconUrl: 'https://via.placeholder.com/64x64/c0c0c0/000000?text=B',
    price: 'Get',
    ctaLink: '#',
  } as ListItemWork,
  {
    id: 'logic-pro',
    type: 'list-item',
    title: 'Logic Pro',
    description: 'Professional music production',
    iconUrl: 'https://via.placeholder.com/64x64/e0a0e0/000000?text=LP',
    price: '$199.99',
    ctaLink: '#',
  } as ListItemWork,
  // Add more list items as needed...

  // Type 4: Small Image Cards (Games)
  {
    id: 'game-dying-world',
    type: 'small-image',
    category: 'GAMES WE LOVE',
    title: 'Can You Save a Dying World?',
    description: 'Battle the darkness with furry friend.',
    imageUrl: 'https://via.placeholder.com/400x300/ffdddd/555555?text=Game+1',
    ctaLink: '#',
  } as SmallImageWork,
  {
    id: 'game-resident-evil',
    type: 'small-image',
    category: 'GAMES WE LOVE',
    title: 'Can You Survive Resident Evil 2?',
    description: 'The macabre masterwork has been re...',
    imageUrl: 'https://via.placeholder.com/400x300/ddffdd/555555?text=Game+2',
    ctaLink: '#',
  } as SmallImageWork,
  {
    id: 'game-must-be-place',
    type: 'small-image',
    category: 'GAMES WE LOVE',
    title: 'This Must Be the Place',
    description: 'Discover your destiny in the secretive...',
    imageUrl: 'https://via.placeholder.com/400x300/ddddff/555555?text=Game+3',
    ctaLink: '#',
  } as SmallImageWork,
  {
    id: 'game-job-bites',
    type: 'small-image',
    category: 'GAMES WE LOVE',
    title: 'This Job Bites!',
    description: 'Work night shifts as a werewolf janitor...',
    imageUrl: 'https://via.placeholder.com/400x300/ffffdd/555555?text=Game+4',
    ctaLink: '#',
  } as SmallImageWork,
];

const SectionTitle: React.FC<{ title: string; seeAllLink?: string }> = ({ title, seeAllLink }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
    {seeAllLink && (
      <a href={seeAllLink} className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
        See All
      </a>
    )}
  </div>
);

export function Works() {
  const largeFeatures = placeholderWorksData.filter(item => item.type === 'large-feature') as LargeFeatureWork[];
  const mediumFeatures = placeholderWorksData.filter(item => item.type === 'medium-feature') as MediumFeatureWork[];
  const listItems = placeholderWorksData.filter(item => item.type === 'list-item') as ListItemWork[];
  const smallImageItems = placeholderWorksData.filter(item => item.type === 'small-image') as SmallImageWork[];

  return (
    <section className="py-12 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Large Feature Section */}
        {largeFeatures.length > 0 && (
          <section>
            {largeFeatures.map(item => <LargeFeatureCard key={item.id} item={item} />)}
          </section>
        )}

        {/* Medium Feature Section */}
        {mediumFeatures.length > 0 && (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediumFeatures.map(item => <MediumFeatureCard key={item.id} item={item} />)}
            </div>
          </section>
        )}

        {/* List Item Section */}
        {listItems.length > 0 && (
          <section>
            <SectionTitle title="Best New Apps and Updates" seeAllLink="#" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
              {listItems.map(item => <ListItemCard key={item.id} item={item} />)}
            </div>
          </section>
        )}

        {/* Small Image/Game Section */}
        {smallImageItems.length > 0 && (
          <section>
            <SectionTitle title="The Latest Must-Play Games" seeAllLink="#" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {smallImageItems.map(item => <SmallImageCard key={item.id} item={item} />)}
            </div>
          </section>
        )}

      </div>
    </section>
  );
}

