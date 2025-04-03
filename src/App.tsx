import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Shield, Search, MessageSquare, X, Menu, ChevronDown, Sun, Moon } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showUseCases, setShowUseCases] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement actual authentication logic
    console.log('Auth submitted:', { email, password, isSignUp });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 fixed w-full top-0 z-50 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.svg" alt="Prajana AI Logo" className="w-8 h-8" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Prajana AI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Getting Started</a>
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
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-white">
                      <div className="font-medium">Documentation Search</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Smart search for your documentation</div>
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-white">
                      <div className="font-medium">Knowledge Base</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Centralize your team's knowledge</div>
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-white">
                      <div className="font-medium">API Documentation</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Interactive API documentation</div>
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Docs</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog</a>
              <button
                onClick={() => setIsAuthModalOpen(true)}
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
              <a href="#" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Getting Started</a>
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
                    <a href="#" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      <div className="font-medium">Documentation Search</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Smart search for your documentation</div>
                    </a>
                    <a href="#" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      <div className="font-medium">Knowledge Base</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Centralize your team's knowledge</div>
                    </a>
                    <a href="#" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      <div className="font-medium">API Documentation</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Interactive API documentation</div>
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Docs</a>
              <a href="#" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</a>
              <a href="#" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog</a>
              <button
                onClick={() => {
                  setIsAuthModalOpen(true);
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

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{isSignUp ? 'Create Account' : 'Sign In'}</h2>
              <button onClick={() => setIsAuthModalOpen(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
              >
                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-20 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              AI-Powered Search for Your Documentation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your documentation experience with intelligent search capabilities. Get instant, accurate answers from your docs.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-300 dark:border-gray-600 px-8 py-3 rounded-lg font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<img src="/logo.svg" alt="AI Search" className="w-8 h-8" />}
              title="AI-Powered Search"
              description="Advanced machine learning algorithms provide precise and contextual search results."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
              title="Lightning Fast"
              description="Get instant answers with our optimized search engine built for speed."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
              title="Secure & Private"
              description="Your documentation stays private with enterprise-grade security."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Connect Your Docs"
              description="Easily integrate your documentation from any source."
              icon={<Search className="w-6 h-6" />}
            />
            <StepCard
              number="2"
              title="AI Processing"
              description="Our AI analyzes and indexes your content for optimal search."
              icon={<img src="/logo.svg" alt="AI Processing" className="w-6 h-6" />}
            />
            <StepCard
              number="3"
              title="Start Searching"
              description="Get instant, accurate answers from your documentation."
              icon={<MessageSquare className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Transform Your Documentation?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join companies that trust our AI-powered search solution.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl relative">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
          {number}
        </div>
        <div className="text-indigo-600 dark:text-indigo-400">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

export default App;