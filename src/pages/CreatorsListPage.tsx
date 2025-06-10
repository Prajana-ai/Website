import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWorks } from '../lib/workService';

interface CreatorInfo {
  id: string;
  name: string;
  workCount: number;
}

export function CreatorsListPage() {
  const [creators, setCreators] = useState<CreatorInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        setIsLoading(true);
        const works = await getWorks();
        
        const creatorMap = new Map<string, { name: string; workCount: number }>();

        works.forEach(work => {
          if (work.creatorId) {
            const creatorDisplayName = work.creatorName || work.creatorId;
            if (creatorMap.has(work.creatorId)) {
              const existing = creatorMap.get(work.creatorId)!;
              creatorMap.set(work.creatorId, { ...existing, workCount: existing.workCount + 1 });
            } else {
              creatorMap.set(work.creatorId, { name: creatorDisplayName, workCount: 1 });
            }
          }
        });

        const uniqueCreators: CreatorInfo[] = Array.from(creatorMap.entries()).map(([id, data]) => ({
          id,
          name: data.name,
          workCount: data.workCount,
        })).sort((a, b) => a.name.localeCompare(b.name)); // Sort by name
        
        setCreators(uniqueCreators);
        setError(null);
      } catch (err) {
        console.error('Error fetching creators:', err);
        setError('Failed to load creators. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCreators();
  }, []);

  if (isLoading) {
    return (
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300">Loading creators...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Our Creators</h1>
        
        {creators.length === 0 && !isLoading && (
          <div className="text-center py-10 px-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300">No creators found at the moment.</p>
          </div>
        )}

        {creators.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creators.map((creator) => (
              <Link 
                key={creator.id} 
                to={`/creators/${creator.id}`} 
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2 truncate">{creator.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{creator.workCount} work{creator.workCount !== 1 ? 's' : ''} featured</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
