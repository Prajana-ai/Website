import React from 'react';
import { useParams } from 'react-router-dom';
import { AppDetailData, AppScreenshot } from '../types/works';
import { ArrowLeft, Share2, Download } from 'lucide-react';

// Placeholder data - in a real app, this would come from an API or state management
const appDetailsDatabase: { [key: string]: AppDetailData } = {
  'sketch-design-toolkit': {
    id: 'sketch-app',
    appId: 'sketch-design-toolkit',
    title: 'Sketch: digital design toolkit',
    category: 'MAJOR UPDATE',
    description: 'UI and graphic design app',
    bannerImageUrl: 'https://via.placeholder.com/1200x500/e0e0e0/888888?text=Sketch+Banner',
    iconUrl: 'https://via.placeholder.com/128x128/f0f0f0/000000?text=S',
    longDescription: "Whether you're looking to create a mock-up for your website or app, an eye-catching icon, or a festive party invite, the Apple Design Award winner Sketch is flexible enough to adapt.",
    whatWeLove: {
      title: 'What we love',
      content: "How easy Sketch is to jump into, no matter your level of expertise. Create from scratch or use one of the hundreds of templates for app mock-ups, social media posts, Kanban boards, and more. Leverage an infinite canvas to iterate using layers, vector illustrations, interface elements, and advanced typography. Put your most-used tools right in the toolbar—the app offers over 50 options! And make creativity a true team effort with real-time collaboration and threaded comments that can be applied to any part of a design.",
    },
    screenshots: [
      { id: 'ss1', url: 'https://via.placeholder.com/800x600/cccccc/555555?text=Screenshot+1', caption: 'Main interface' } as AppScreenshot,
      { id: 'ss2', url: 'https://via.placeholder.com/800x600/d0d0d0/666666?text=Screenshot+2', caption: 'Collaboration view' } as AppScreenshot,
      { id: 'ss3', url: 'https://via.placeholder.com/800x600/d8d8d8/777777?text=Screenshot+3', caption: 'Symbol library' } as AppScreenshot,
    ] as AppScreenshot[],
    shareText: 'Share your prototype with colleagues so they can tweak and comment. Use the companion app Sketch–View and Mirror to see your design on iPhone and iPad.',
    quickTip: {
      title: 'Quick tip',
      content: "Use the new Stacks feature to create groups of elements that automatically adapt to fit their container or content—perfect for everything from buttons to complex combinations of shapes, images, and text. And save time by using Libraries to store the symbols, element styles, frame templates, and other components you use frequently; when you update a component in a library, it's instantly updated across all your documents.",
    },
    ctaText: 'Get',
    ctaLink: '#',
    inAppPurchases: true,
  },
};

export const AppDetailPage: React.FC = () => {
  const { appId } = useParams<{ appId: string }>();
  const appData = appId ? appDetailsDatabase[appId] : null;

  if (!appData) {
    return <div className="p-8 text-center text-red-500">App not found.</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Back Button - Optional */} 
      <button 
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 z-10 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Banner Image */}
      {appData.bannerImageUrl && (
        <div 
          className="h-[300px] md:h-[400px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${appData.bannerImageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            {appData.category && <p className='text-xs text-gray-200 uppercase tracking-wider font-semibold'>{appData.category}</p>}
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-1">{appData.title}</h1>
          </div>
        </div>
      )}

      {/* App Info Bar */}
      <div className="bg-gray-100 dark:bg-gray-900 sticky top-0 z-20 shadow-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex items-center">
            {appData.iconUrl && (
              <img src={appData.iconUrl} alt={`${appData.title} icon`} className="w-14 h-14 rounded-xl mr-4" />
            )}
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">{appData.title}</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">{appData.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {appData.ctaText && (
              <a 
                href={appData.ctaLink || '#'}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors flex items-center"
              >
                <Download size={16} className="mr-2"/> {appData.ctaText}
              </a>
            )}
            <button className="p-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>
        {appData.inAppPurchases && (
            <div className="text-center text-xs text-gray-500 dark:text-gray-400 pb-1">
                In-App Purchases
            </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column (Description, What We Love) */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {appData.longDescription}
              </p>
            </section>
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{appData.whatWeLove.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {appData.whatWeLove.content}
              </p>
            </section>
          </div>

          {/* Right Column (Screenshots, Quick Tip) - This might need adjustment based on actual content flow */}
          <div className="space-y-8">
            {appData.screenshots.length > 0 && (
              <section>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Screenshots</h3>
                <div className="space-y-4">
                  {appData.screenshots.map((ss) => (
                    <div key={ss.id} className="rounded-lg overflow-hidden shadow-md">
                      <img src={ss.url} alt={ss.caption || 'Screenshot'} className="w-full" />
                      {ss.caption && <p className="text-xs text-center py-2 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400">{ss.caption}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Share Text and Quick Tip (Full Width Below Columns) */}
        {(appData.shareText || appData.quickTip) && (
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 space-y-8">
                {appData.shareText && (
                    <section>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {appData.shareText}
                        </p>
                    </section>
                )}
                {appData.quickTip && (
                    <section>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{appData.quickTip.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {appData.quickTip.content}
                        </p>
                    </section>
                )}
            </div>
        )}
      </div>
    </div>
  );
};
