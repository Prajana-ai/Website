import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getWorks } from '../../lib/workService';
import { WorkItemData } from '../../types/works';
import { SectionTitle } from '../../components/SectionTitle.tsx';
import { LargeFeatureCard } from '../../components/LargeFeatureCard';
import { MediumFeatureCard } from '../../components/MediumFeatureCard';
import { ListItemCard } from '../../components/ListItemCard';
import { SmallImageCard } from '../../components/SmallImageCard';

export function CreatorDetailPage() {
  const { creatorId } = useParams<{ creatorId: string }>();
  const [creatorWorks, setCreatorWorks] = useState<WorkItemData[]>([]);
  const [creatorName, setCreatorName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!creatorId) {
      setError('Creator ID not found.');
      setIsLoading(false);
      return;
    }

    const fetchCreatorWorks = async () => {
      try {
        setIsLoading(true);
        const allWorks = await getWorks();
        const worksByCreator = allWorks.filter(work => work.creatorId === creatorId);

        if (worksByCreator.length > 0) {
          setCreatorName(worksByCreator[0].creatorName || creatorId); // Use creatorName or fallback to ID
        } else {
          setCreatorName(creatorId); // Fallback if no works found but still want to show ID
        }
        
        setCreatorWorks(worksByCreator);
        setError(null);
      } catch (err) {
        console.error(`Error fetching works for creator ${creatorId}:`, err);
        setError('Failed to load works for this creator.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCreatorWorks();
  }, [creatorId]);

  if (isLoading) {
    return (
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300">Loading creator's works...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-red-500">{error}</p>
          <Link to="/creators" className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:underline">
            Back to Creators List
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <SectionTitle title={`Works by ${creatorName}`} />

        {creatorWorks.length === 0 && !isLoading && (
          <div className="text-center py-10 px-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300">No works found for this creator.</p>
            <Link to="/creators" className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:underline">
              Back to Creators List
            </Link>
          </div>
        )}

        {creatorWorks.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mt-8">
            {creatorWorks.map((work: WorkItemData) => {
              switch (work.type) {
                case 'large-feature':
                  return <LargeFeatureCard key={work.id} item={work} />;
                case 'medium-feature':
                  return <MediumFeatureCard key={work.id} item={work} />;
                case 'list-item':
                  return <ListItemCard key={work.id} item={work} />;
                case 'small-image':
                  return <SmallImageCard key={work.id} item={work} />;
                default:
                  // Log an error or handle unexpected work type
                  console.warn('Unknown or unexpected work type encountered in CreatorDetailPage.');
                  return null;
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
}
