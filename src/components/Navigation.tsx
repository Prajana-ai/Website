import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu, Sun, Moon, Laptop } from 'lucide-react';

const navigationItems = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Works', href: '/works' },
];

interface NavigationProps {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

export function Navigation({ theme, setTheme }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-gray-900 dark:text-white">prajana.ai</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                {navigationItems.map((item) => (
                  <li key={item.text}>
                    <Link
                      to={item.href}
                      className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  if (theme === 'light') setTheme('dark');
                  else if (theme === 'dark') setTheme('system');
                  else setTheme('light');
                }}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === 'light' && <Moon className="w-5 h-5" />}
                {theme === 'dark' && <Laptop className="w-5 h-5" />}
                {theme === 'system' && (
                  window.matchMedia('(prefers-color-scheme: dark)').matches 
                    ? <Sun className="w-5 h-5" /> 
                    : <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.text}
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
