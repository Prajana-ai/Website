import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getWorkByAppId } from '../lib/workService';
import { WorkItemData } from '../types/works';
import { ArrowLeft, Share2, Download, ExternalLink } from 'lucide-react';

export const AppDetailPage: React.FC = () => {
  const { appId } = useParams<{ appId: string }>();
  const [appData, setAppData] = useState<WorkItemData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApp = async () => {
      if (!appId) return;
      try {
        setIsLoading(true);
        const data = await getWorkByAppId(appId);
        if (data) {
          setAppData(data);
          setError(null);
        } else {
          setError('App not found.');
        }
      } catch (err) {
        console.error('Error fetching app details:', err);
        setError('Failed to load app details.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchApp();
  }, [appId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex justify-center items-center">
        <p className="text-xl text-gray-500 animate-pulse">Loading app details...</p>
      </div>
    );
  }

  if (error || !appData) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col justify-center items-center p-8">
        <p className="text-xl text-red-500 mb-4">{error || 'App not found.'}</p>
        <Link to="/works" className="text-indigo-600 hover:underline flex items-center">
          <ArrowLeft size={16} className="mr-2" /> Back to Works
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen relative">
      {/* Back Button */}
      <Link
        to="/works"
        className="absolute top-4 left-4 z-30 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-sm"
      >
        <ArrowLeft size={24} />
      </Link>

      {/* Banner Image */}
      <div
        className="h-[300px] md:h-[450px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${appData.bannerImageUrl || appData.imageUrl || 'https://via.placeholder.com/1200x500?text=App+Banner'})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
          <div className="max-w-5xl mx-auto">
            {appData.category && <p className='text-xs text-indigo-300 uppercase tracking-widest font-bold mb-2'>{appData.category}</p>}
            <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">{appData.title}</h1>
          </div>
        </div>
      </div>

      {/* App Info Bar */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-20 shadow-sm border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex items-center min-w-0">
            {(appData.iconUrl || appData.imageUrl) && (
              <img src={appData.iconUrl || appData.imageUrl} alt={`${appData.title} icon`} className="w-12 h-12 md:w-14 md:h-14 rounded-2xl mr-4 shadow-md object-cover flex-shrink-0" />
            )}
            <div className="truncate">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white truncate">{appData.title}</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{appData.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4 ml-4">
            {appData.ctaText && (
              <a
                href={appData.ctaLink || '#'}
                target="_blank"
                rel="noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 md:px-8 py-2.5 rounded-full text-sm transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                <Download size={16} className="mr-2" /> {appData.ctaText.toUpperCase()}
              </a>
            )}
            <button className="p-2.5 text-gray-400 hover:text-indigo-500 transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>
        {appData.inAppPurchases && (
          <div className="text-center text-[10px] font-bold uppercase tracking-tighter text-gray-400 dark:text-gray-500 pb-1">
            In-App Purchases Included
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-4">Description</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
                {appData.longDescription || appData.description}
              </p>
            </section>

            {appData.whatWeLove && appData.whatWeLove.content && (
              <section className="bg-indigo-50/50 dark:bg-indigo-900/10 p-8 rounded-3xl border border-indigo-100/50 dark:border-indigo-900/20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-8 bg-indigo-500 rounded-full mr-4 inline-block"></span>
                  {appData.whatWeLove.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic text-lg">
                  "{appData.whatWeLove.content}"
                </p>
              </section>
            )}
          </div>

          {/* Right Column (Screenshots, Quick Tip) */}
          <div className="space-y-12">
            {appData.screenshots && appData.screenshots.length > 0 && (
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-6">Preview</h3>
                <div className="space-y-6">
                  {appData.screenshots.map((ss, idx) => (
                    <div key={ss.id || idx} className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 group">
                      <img src={ss.url} alt={ss.caption || 'Screenshot'} className="w-full transform group-hover:scale-105 transition-transform duration-700" />
                      {ss.caption && <p className="text-[10px] uppercase font-bold text-center py-3 bg-gray-50/50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">{ss.caption}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {appData.quickTip && appData.quickTip.content && (
              <section className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20">
                <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2">{appData.quickTip.title}</h3>
                <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                  {appData.quickTip.content}
                </p>
              </section>
            )}
          </div>
        </div>

        {/* Share Section */}
        {appData.shareText && (
          <div className="mt-16 pt-10 border-t border-gray-100 dark:border-gray-800 text-center max-w-2xl mx-auto">
            <p className="text-gray-500 dark:text-gray-400 text-sm italic leading-relaxed">
              {appData.shareText}
            </p>
          </div>
        )}

        {/* External Links */}
        <div className="mt-20 flex justify-center">
          <Link to="/works" className="px-8 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold text-xs uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
            EXPLORE MORE WORKS
          </Link>
        </div>
      </div>
    </div>
  );
};
