import React from 'react';

export function Blog() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Blog</h1>
        
        <div className="space-y-8">
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="AI and Documentation" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                The Future of Documentation: AI-Powered Search
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Discover how AI is transforming the way teams manage and access documentation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">March 15, 2024</span>
                <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Read more →</a>
              </div>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Knowledge Management" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                Best Practices for Knowledge Management
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Learn how to effectively organize and maintain your team's knowledge base.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">March 10, 2024</span>
                <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Read more →</a>
              </div>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="API Documentation" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                Creating Effective API Documentation
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Tips and tricks for writing API documentation that developers love.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">March 5, 2024</span>
                <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Read more →</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}