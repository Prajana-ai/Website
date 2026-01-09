import { useState, useEffect } from 'react';
import { WorkItemData } from '../types/works';
import { getWorks } from '../lib/workService';
import { WorkspaceCard } from '../components/WorkspaceCard';
import { SectionTitle } from '../components/SectionTitle';

export function Works() {
  const [groupedWorks, setGroupedWorks] = useState<Record<string, WorkItemData[]>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorksData = async () => {
      try {
        setIsLoading(true);
        const worksFromDb = await getWorks();

        const groups: Record<string, WorkItemData[]> = worksFromDb.reduce((acc, work) => {
          const category = work.category || 'Uncategorized';
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(work);
          return acc;
        }, {} as Record<string, WorkItemData[]>);
        setGroupedWorks(groups);
        setError(null);
      } catch (err) {
        console.error("Error fetching works: ", err);
        setError('Failed to load works. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorksData();
  }, []);


  if (isLoading) {
    return (
      <section className="py-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70">Loading works...</p>
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

  if (!isLoading && Object.keys(groupedWorks).length === 0 && !error) {
    return (
      <section className="py-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70">No works to display at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {Object.entries(groupedWorks)
          .sort(([catA], [catB]) => catA.localeCompare(catB))
          .map(([category, worksInCategory]) => {
            if (worksInCategory.length === 0) return null;

            return (
              <section key={category}>
                <SectionTitle title={category} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {worksInCategory.map(item => (
                    <WorkspaceCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            );
          })}
      </div>
    </section>
  );
}
