import React from 'react';

export function Docs() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Documentation</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Getting Started</h2>
            <div className="prose dark:prose-invert">
              <ol className="list-decimal pl-4 space-y-4">
                <li className="text-gray-700 dark:text-gray-300">
                  <strong>Installation</strong>
                  <p>Install our package using npm:</p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <code>npm install @prajana/search</code>
                  </pre>
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  <strong>Configuration</strong>
                  <p>Set up your API key and configuration:</p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <code>{`import { PrajanaSearch } from '@prajana/search';

const search = new PrajanaSearch({
  apiKey: 'your-api-key',
  indexName: 'your-index'
});`}</code>
                  </pre>
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  <strong>Usage</strong>
                  <p>Start searching through your documentation:</p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <code>{`const results = await search.query('authentication');
console.log(results);`}</code>
                  </pre>
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">API Reference</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">search.query(term: string)</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Performs a search query across your documentation.
                </p>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Parameters:</h4>
                <ul className="list-disc pl-4 text-gray-600 dark:text-gray-300">
                  <li>term (string): The search query to execute</li>
                </ul>
                <h4 className="font-medium text-gray-900 dark:text-white mt-4 mb-2">Returns:</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Promise&lt;SearchResult[]&gt;: Array of matching documents
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">search.index(documents: Document[])</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Indexes new documents for searching.
                </p>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Parameters:</h4>
                <ul className="list-disc pl-4 text-gray-600 dark:text-gray-300">
                  <li>documents (Document[]): Array of documents to index</li>
                </ul>
                <h4 className="font-medium text-gray-900 dark:text-white mt-4 mb-2">Returns:</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Promise&lt;void&gt;: Resolves when indexing is complete
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Examples</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Basic Search</h3>
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
                  <code>{`const results = await search.query('api');
results.forEach(doc => {
  console.log(doc.title);
});`}</code>
                </pre>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Advanced Filtering</h3>
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
                  <code>{`const results = await search.query('api', {
  filters: {
    category: 'authentication',
    version: 'v2'
  }
});`}</code>
                </pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}