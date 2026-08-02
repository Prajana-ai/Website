import { useState, useEffect } from 'react';
import { WorkItemData } from '../types/works';
import { WorkspaceCard } from '../components/WorkspaceCard';
import { SectionTitle } from '../components/SectionTitle';
import { curatedWorks } from '../data/curatedWorks';

const groupWorks = (works: WorkItemData[]) =>
  works.filter(work => work.status !== 'draft').sort((a, b) => (a.order ?? 999) - (b.order ?? 999)).reduce((groups, work) => {
    const category = work.category || 'Uncategorized';
    if (!groups[category]) groups[category] = [];
    groups[category].push(work);
    return groups;
  }, {} as Record<string, WorkItemData[]>);

const mergeWorks = (remoteWorks: WorkItemData[]) => {
  const worksById = new Map(curatedWorks.map(work => [work.id, work]));
  remoteWorks.forEach(work => worksById.set(work.id, work));
  return Array.from(worksById.values());
};

export function Works() {
  const [groupedWorks, setGroupedWorks] = useState<Record<string, WorkItemData[]>>(() => groupWorks(curatedWorks));
  const [catalogNotice, setCatalogNotice] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorksData = async () => {
      try {
        const { getWorks } = await import('../lib/workService');
        const worksFromDb = await getWorks();
        setGroupedWorks(groupWorks(mergeWorks(worksFromDb)));
        setCatalogNotice(null);
      } catch (err) {
        console.error("Error fetching works: ", err);
        setGroupedWorks(groupWorks(curatedWorks));
        setCatalogNotice('Showing our curated selection. The full archive is temporarily unavailable.');
      }
    };

    fetchWorksData();
  }, []);


  if (Object.keys(groupedWorks).length === 0) {
    return (
      <section className="py-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70">No works to display at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 dark:bg-[#0d0c2a] sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        <header className="max-w-3xl pb-4">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-prajana-purple dark:text-prajana-cyan">
            Selected work
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-prajana-deep-blue dark:text-white">
            Products shaped through collaboration.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70">
            Practical AI products created with domain experts, builders, and communities—each designed to make intelligence more useful.
          </p>
        </header>
        {catalogNotice && <p role="status" className="-mt-10 rounded-2xl border border-prajana-orange/25 bg-prajana-orange/10 px-5 py-3 text-sm text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70">{catalogNotice}</p>}

        {Object.entries(groupedWorks)
          .sort(([catA], [catB]) => {
            const featuredCategory = 'Collaborations with Bharat Mabbu';
            if (catA === featuredCategory) return -1;
            if (catB === featuredCategory) return 1;
            return catA.localeCompare(catB);
          })
          .map(([category, worksInCategory]) => {
            if (worksInCategory.length === 0) return null;

            return (
              <section key={category}>
                <SectionTitle title={category} />

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${worksInCategory.length === 2 ? 'max-w-4xl' : 'lg:grid-cols-3'}`}>
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
