import React from 'react';
import { Code, GitBranch, Terminal } from 'lucide-react';

export function ApiDocumentation() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">API Documentation</h1>
        
        <div className="space-y-12">
          <section>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Create interactive and intelligent API documentation that helps developers integrate faster and more efficiently.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Interactive Examples</h3>
                <p className="text-gray-600 dark:text-gray-300">Try API endpoints directly in the documentation</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <GitBranch className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Version Management</h3>
                <p className="text-gray-600 dark:text-gray-300">Handle multiple API versions seamlessly</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Terminal className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Code Generation</h3>
                <p className="text-gray-600 dark:text-gray-300">Auto-generate client libraries and examples</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Key Features</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">OpenAPI Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Import and export OpenAPI (Swagger) specifications with ease.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Authentication Playground</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Test different authentication methods in a secure environment.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Response Visualization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Beautiful visualization of API responses and data structures.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Example API Request</h2>
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm text-gray-700 dark:text-gray-300">
                <code>{`curl -X POST https://api.prajana.ai/v1/search \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "How to implement authentication?"}'`}</code>
              </pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Get Started</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ready to create interactive API documentation? Start with our guide.
              </p>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                View API Guide
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}