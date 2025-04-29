import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Menu, ChevronDown, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  onOpenAuth: () => void;
}

export function Navigation({ isDark, setIsDark, onOpenAuth }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUseCases, setShowUseCases] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 fixed w-full top-0 z-50 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Prajana AI Logo" className="w-8 h-8" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Prajana AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/getting-started" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Getting Started
            </Link>
            <div className="relative">
              <button 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-1"
                onMouseEnter={() => setShowUseCases(true)}
                onMouseLeave={() => setShowUseCases(false)}
              >
                Use Cases
                <ChevronDown className="w-4 h-4" />
              </button>
              {showUseCases && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-lg py-2 mt-1"
                  onMouseEnter={() => setShowUseCases(true)}
                  onMouseLeave={() => setShowUseCases(false)}
                >
                  <Link 
                    to="/use-cases/documentation-search"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-white"
                  >
                    <div className="font-medium">Documentation Search</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Smart search for your documentation</div>
                  </Link>
                  <Link 
                    to="/use-cases/knowledge-base"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-white"
                  >
                    <div className="font-medium">Knowledge Base</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Centralize your team's knowledge</div>
                  </Link>
                  <Link 
                    to="/use-cases/api-documentation"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-white"
                  >
                    <div className="font-medium">API Documentation</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Interactive API documentation</div>
                  </Link>
                </div>
              )}
            </div>
            <Link to="/docs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Docs
            </Link>
            <Link to="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Blog
            </Link>
            <button
              onClick={onOpenAuth}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/getting-started"
              className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Getting Started
            </Link>
            <div className="px-3 py-2">
              <button 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-1"
                onClick={() => setShowUseCases(!showUseCases)}
              >
                Use Cases
                <ChevronDown className="w-4 h-4" />
              </button>
              {showUseCases && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link 
                    to="/use-cases/documentation-search"
                    className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium">Documentation Search</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Smart search for your documentation</div>
                  </Link>
                  <Link 
                    to="/use-cases/knowledge-base"
                    className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium">Knowledge Base</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Centralize your team's knowledge</div>
                  </Link>
                  <Link 
                    to="/use-cases/api-documentation"
                    className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium">API Documentation</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Interactive API documentation</div>
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/docs"
              className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
            <Link 
              to="/pricing"
              className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/blog"
              className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <button
              onClick={() => {
                onOpenAuth();
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}