import React from 'react';
import { Community } from '../sections/Community';

export function CommunityPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <main className="container mx-auto px-4 py-8">
        <Community />
      </main>
    </div>
  );
}
