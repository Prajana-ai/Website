import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
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
  );
}