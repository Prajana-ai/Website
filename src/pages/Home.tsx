import { Hero } from '../sections/Hero';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <div className="max-w-6xl mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Discover the vision behind prajana.ai and our mission to create a future where human ingenuity and AI co-create.
              </p>
              <a 
                href="/about" 
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
              >
                Learn More →
              </a>
            </div>

            {/* Works Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Works
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Explore our collection of AI-powered applications and tools designed to enhance human creativity and productivity.
              </p>
              <a 
                href="/works" 
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
              >
                View Portfolio →
              </a>
            </div>

            {/* Community Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Join Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Become part of our community of creators, developers, and innovators shaping the future of AI collaboration.
              </p>
              <a 
                href="/community" 
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
              >
                Get Involved →
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
