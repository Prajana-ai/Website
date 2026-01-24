import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getWorks } from '../../lib/workService';
import { getCreator, CreatorData } from '../../lib/creatorService';
import { WorkItemData } from '../../types/works';
import { SectionTitle } from '../../components/SectionTitle.tsx';
import { LargeFeatureCard } from '../../components/LargeFeatureCard';
import { MediumFeatureCard } from '../../components/MediumFeatureCard';
import { ListItemCard } from '../../components/ListItemCard';
import { SmallImageCard } from '../../components/SmallImageCard';

export function CreatorDetailPage() {
  const { creatorId } = useParams<{ creatorId: string }>();
  const [creatorWorks, setCreatorWorks] = useState<WorkItemData[]>([]);
  const [creator, setCreator] = useState<CreatorData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!creatorId) {
      setError('Creator ID not found.');
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [allWorks, creatorData] = await Promise.all([
          getWorks(),
          getCreator(creatorId)
        ]);

        const worksByCreator = allWorks.filter(work => work.creatorId === creatorId);

        setCreatorWorks(worksByCreator);
        setCreator(creatorData);
        setError(null);
      } catch (err) {
        console.error(`Error fetching data for creator ${creatorId}:`, err);
        setError('Failed to load creator details.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [creatorId]);

  if (isLoading) {
    return (
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300">Loading creator's works...</p>
        </div>
      </section>
    );
  }

  if (error || !creator) {
    return (
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl text-red-500">{error || 'Creator not found'}</p>
          <Link to="/creators" className="mt-4 inline-block text-indigo-600 hover:underline">Back to Creators List</Link>
        </div>
      </section>
    );
  }

  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-prajana-deep-blue rounded-3xl overflow-hidden shadow-xl mb-12">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img src={creator.imageUrl || "/creator-placeholder.png"} alt={creator.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{creator.name}</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{creator.bio || 'This creator hasn\'t shared a bio yet.'}</p>
              {creator.socialLinks && (
                <div className="flex space-x-4">
                  {creator.socialLinks.twitter && <a href={creator.socialLinks.twitter} target="_blank" rel="noreferrer" className="text-prajana-cyan hover:text-prajana-purple transition-colors">Twitter</a>}
                  {creator.socialLinks.github && <a href={creator.socialLinks.github} target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-white- transition-colors">GitHub</a>}
                </div>
              )}
            </div>
          </div>
        </div>

        <SectionTitle title={`Works by ${creator.name}`} />

        {creatorWorks.length === 0 ? (
          <div className="text-center py-10 px-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300">No works found for this creator.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mt-8">
            {creatorWorks.map((work: WorkItemData) => {
              switch (work.type) {
                case 'large-feature': return <LargeFeatureCard key={work.id} item={work} />;
                case 'medium-feature': return <MediumFeatureCard key={work.id} item={work} />;
                case 'list-item': return <ListItemCard key={work.id} item={work} />;
                case 'small-image': return <SmallImageCard key={work.id} item={work} />;
                default: return null;
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
}
