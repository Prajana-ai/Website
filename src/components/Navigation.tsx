import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu, Sun, Moon, Laptop } from 'lucide-react';

const navigationItems = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Works', href: '/works' },
  { text: 'Creators', href: '/creators' },
];

interface NavigationProps {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

export function Navigation({ theme, setTheme }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="bg-[var(--background-color-light)] dark:bg-[var(--background-color-dark)] border-b border-prajana-teal/30 dark:border-prajana-teal/50 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src="/prajana-favicon.png" alt="Prajana AI Logo" className="h-10 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                {navigationItems.map((item) => (
                  <li key={item.text}>
                    <Link
                      to={item.href}
                      className="text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] hover:text-prajana-magenta dark:hover:text-prajana-cyan transition-colors"
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
                className="text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] hover:text-prajana-magenta dark:hover:text-prajana-cyan p-2 rounded-lg hover:bg-prajana-purple/20 dark:hover:bg-prajana-purple/30"
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
                className="text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] hover:text-prajana-magenta dark:hover:text-prajana-cyan"
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
                    className="block px-3 py-2 text-base font-medium text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] hover:text-prajana-magenta dark:hover:text-prajana-cyan hover:bg-prajana-purple/20 dark:hover:bg-prajana-purple/30 rounded-md"
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
