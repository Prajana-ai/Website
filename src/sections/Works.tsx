import { useState, useEffect } from 'react';
import { WorkItemData, LargeFeatureWork, MediumFeatureWork, ListItemWork, SmallImageWork } from '../types/works';
import { getWorks } from '../lib/workService';
import { LargeFeatureCard } from '../components/LargeFeatureCard';
import { MediumFeatureCard } from '../components/MediumFeatureCard';
import { ListItemCard } from '../components/ListItemCard';
import { SmallImageCard } from '../components/SmallImageCard';
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
        // No need to clear allWorks as it's removed, groupedWorks will remain empty or as per last successful fetch
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorksData();
  }, []);


  if (isLoading) {
    return (
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300">Loading works...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  if (!isLoading && Object.keys(groupedWorks).length === 0 && !error) {
    return (
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300">No works to display at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {Object.entries(groupedWorks)
          .sort(([catA], [catB]) => catA.localeCompare(catB)) // Sort categories alphabetically
          .map(([category, worksInCategory]) => {
            const largeFeaturesInCategory = worksInCategory.filter(w => w.type === 'large-feature') as LargeFeatureWork[];
            const otherWorksInCategory = worksInCategory.filter(w => w.type !== 'large-feature');

            if (worksInCategory.length === 0) return null;

            return (
              <section key={category}>
                <SectionTitle title={category} />
                
                {/* Render Large Feature Cards first */}
                {largeFeaturesInCategory.length > 0 && (
                  <div className="space-y-12 mb-12">
                    {largeFeaturesInCategory.map(item => <LargeFeatureCard key={item.id} item={item} />)}
                  </div>
                )}

                {/* Render other card types in a grid */}
                {otherWorksInCategory.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherWorksInCategory.map(item => {
                      switch (item.type) {
                        case 'medium-feature':
                          return <MediumFeatureCard key={item.id} item={item as MediumFeatureWork} />;
                        case 'list-item':
                          return <ListItemCard key={item.id} item={item as ListItemWork} />;
                        case 'small-image':
                          return <SmallImageCard key={item.id} item={item as SmallImageWork} />;
                        default:
                          return null;
                      }
                    })}
                  </div>
                )}
              </section>
            );
          })}
      </div>
    </section>
  );
}

