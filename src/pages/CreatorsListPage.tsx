import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWorks } from '../lib/workService';
import { getCreators, CreatorData } from '../lib/creatorService';

interface CreatorInfo extends CreatorData {
  workCount: number;
}

export function CreatorsListPage() {
  const [creators, setCreators] = useState<CreatorInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [allWorks, allCreators] = await Promise.all([
          getWorks(),
          getCreators()
        ]);

        const workCounts = allWorks.reduce((acc, work) => {
          if (work.creatorId) {
            acc[work.creatorId] = (acc[work.creatorId] || 0) + 1;
          }
          return acc;
        }, {} as Record<string, number>);

        const enrichedCreators: CreatorInfo[] = allCreators.map(creator => ({
          ...creator,
          workCount: workCounts[creator.id] || 0
        })).sort((a, b) => a.name.localeCompare(b.name));

        setCreators(enrichedCreators);
        setError(null);
      } catch (err) {
        console.error('Error fetching creators:', err);
        setError('Failed to load creators. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="py-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70">Loading creators...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 text-center text-prajana-deep-blue dark:text-white relative">
          Our Creators
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-prajana-purple to-prajana-cyan rounded-full"></span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator) => (
            <Link
              key={creator.id}
              to={`/creators/${creator.id}`}
              className="group relative flex flex-col bg-white dark:bg-prajana-deep-blue rounded-2xl overflow-hidden border border-prajana-purple/5 dark:border-prajana-ice-blue/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-full aspect-square relative overflow-hidden">
                <img
                  src={creator.imageUrl || "/creator-placeholder.png"}
                  alt={creator.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prajana-deep-blue/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{creator.name}</h2>
                  <p className="text-prajana-ice-blue/80 font-medium text-sm flex items-center">
                    <span className="w-2 h-2 rounded-full bg-prajana-cyan mr-2 animate-pulse"></span>
                    {creator.workCount} Work{creator.workCount !== 1 ? 's' : ''} Featured
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
