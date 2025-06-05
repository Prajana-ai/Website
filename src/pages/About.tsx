import React from 'react';
import { About } from '../sections/About';
import { Footer } from '../components/Footer';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <main className="container mx-auto px-4 py-8">
        <About />
        <Footer />
      </main>
    </div>
  );
}
