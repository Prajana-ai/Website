import React from 'react';

export function CTA() {
  return (
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
  );
}