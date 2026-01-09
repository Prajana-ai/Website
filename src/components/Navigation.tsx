import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, Sun, Moon, Laptop } from 'lucide-react';

const navigationItems = [
  { text: 'About', href: '/about' },
  { text: 'Works', href: '/works' },
  { text: 'Creators', href: '/creators' },
  { text: 'Community', href: '/community' },
];

interface NavigationProps {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

export function Navigation({ theme, setTheme }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-0' : 'py-2'}`}>
      <div className={`absolute inset-0 transition-opacity duration-300 ${isScrolled
          ? 'bg-white/80 dark:bg-prajana-deep-blue/80 backdrop-blur-md shadow-lg border-b border-prajana-purple/10'
          : 'bg-transparent'
        }`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img
                src="/logo.png"
                alt="Prajana AI Logo"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-2">
              {navigationItems.map((item) => (
                <li key={item.text}>
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === item.href
                        ? 'text-prajana-purple dark:text-prajana-cyan bg-prajana-purple/5 dark:bg-prajana-cyan/10'
                        : 'text-gray-700 dark:text-gray-200 hover:text-prajana-purple dark:hover:text-prajana-cyan hover:bg-prajana-purple/5 dark:hover:bg-prajana-purple/20'
                      }`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-4" />

            <button
              onClick={() => {
                const themes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system'];
                const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
                setTheme(nextTheme);
              }}
              className="p-2.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-prajana-purple/20 transition-colors focus:outline-none focus:ring-2 focus:ring-prajana-cyan"
              aria-label="Toggle theme"
            >
              <span className="sr-only">Toggle theme</span>
              {theme === 'light' && <Moon className="w-5 h-5 text-prajana-deep-blue" />}
              {theme === 'dark' && <Laptop className="w-5 h-5 text-prajana-cyan" />}
              {theme === 'system' && <Sun className="w-5 h-5 text-prajana-purple" />}
            </button>

            <Link
              to="/contact-us"
              className="ml-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-prajana-purple to-prajana-deep-blue text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-prajana-purple dark:hover:text-prajana-cyan focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white dark:bg-prajana-deep-blue border-b border-prajana-purple/10 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="px-4 py-4 space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.text}
              to={item.href}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === item.href
                  ? 'bg-prajana-purple/10 text-prajana-purple dark:text-prajana-cyan'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-prajana-purple/20'
                }`}
            >
              {item.text}
            </Link>
          ))}
          <div className="border-t border-gray-200 dark:border-gray-700 my-2 pt-2">
            <Link
              to="/contact-us"
              className="block w-full text-center px-4 py-3 rounded-lg bg-prajana-purple text-white font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
