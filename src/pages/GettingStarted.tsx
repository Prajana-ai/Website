
export function GettingStarted() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Getting Started with prajana AI labs</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Quick Start Guide</h2>
            <div className="prose dark:prose-invert">
              <ol className="list-decimal pl-4 space-y-4">
                <li className="text-gray-700 dark:text-gray-300">
                  <strong>Create an account</strong>
                  <p>Sign up for prajana AI labs to access all features and start integrating AI-powered search into your documentation.</p>
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  <strong>Connect your documentation</strong>
                  <p>Import your existing documentation from various sources including GitHub, GitLab, or direct file upload.</p>
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  <strong>Configure search settings</strong>
                  <p>Customize search parameters and AI behavior to match your specific needs.</p>
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  <strong>Integrate the search widget</strong>
                  <p>Add our search widget to your website with a simple code snippet.</p>
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Installation</h2>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <pre className="text-sm text-gray-700 dark:text-gray-300">
                <code>npm install @prajana/search-widget</code>
              </pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#" className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Documentation</h3>
                <p className="text-gray-600 dark:text-gray-300">Comprehensive guides and API reference</p>
              </a>
              <a href="#" className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Examples</h3>
                <p className="text-gray-600 dark:text-gray-300">Sample projects and integration demos</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}