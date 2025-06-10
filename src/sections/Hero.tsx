import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <header className="relative min-h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-7xl font-bold text-gray-900 dark:text-white mb-4">
          prajana AI labs
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Where Human Ingenuity and Artificial Intelligence Co-create. Discover the Future, Generated Together.
        </p>
        <Link to="/works" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
          Explore Works
        </Link>
      </div>
    </header>
  );
}