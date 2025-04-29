import React from 'react';
import { Search, BookOpen, Zap } from 'lucide-react';

export function DocumentationSearch() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Documentation Search</h1>
        
        <div className="space-y-12">
          <section>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Transform your documentation with AI-powered search capabilities that understand context and deliver precise results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Search className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Smart Search</h3>
                <p className="text-gray-600 dark:text-gray-300">Contextual understanding of queries for better results</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Multi-format Support</h3>
                <p className="text-gray-600 dark:text-gray-300">Search across Markdown, PDF, and HTML documents</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Real-time Updates</h3>
                <p className="text-gray-600 dark:text-gray-300">Instant indexing of documentation changes</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">How It Works</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Connect Your Documentation</h3>
                    <p className="text-gray-600 dark:text-gray-300">Import documentation from your preferred source</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">AI Processing</h3>
                    <p className="text-gray-600 dark:text-gray-300">Our AI analyzes and indexes your content</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Integration</h3>
                    <p className="text-gray-600 dark:text-gray-300">Add the search widget to your documentation site</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Get Started</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ready to enhance your documentation search? Start with our quick setup guide.
              </p>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                View Setup Guide
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}