import React from 'react';
import { Works } from '../sections/Works';

export function WorksPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <main className="container mx-auto px-4 py-8">
        <Works />
      </main>
    </div>
  );
}
