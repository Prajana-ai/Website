import React from 'react';
import { Database, Users, Lock } from 'lucide-react';

export function KnowledgeBase() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Knowledge Base</h1>
        
        <div className="space-y-12">
          <section>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Centralize your team's knowledge with our intelligent knowledge base solution. Make information easily accessible and searchable.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Database className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Centralized Storage</h3>
                <p className="text-gray-600 dark:text-gray-300">Keep all your knowledge in one secure location</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Team Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300">Easy sharing and collaboration features</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Lock className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Access Control</h3>
                <p className="text-gray-600 dark:text-gray-300">Granular permissions and security settings</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Features</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Smart Organization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  AI-powered categorization and tagging system that automatically organizes your content.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Version Control</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Track changes and maintain document history with built-in versioning.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Insights into how your team uses and interacts with the knowledge base.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Get Started</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ready to centralize your team's knowledge? Start with our setup guide.
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