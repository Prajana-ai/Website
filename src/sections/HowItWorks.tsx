import React from 'react';
import { Search, MessageSquare } from 'lucide-react';
import { StepCard } from '../components/StepCard';

export function HowItWorks() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <StepCard
            number="1"
            title="Connect Your Docs"
            description="Easily integrate your documentation from any source."
            icon={<Search className="w-6 h-6" />}
          />
          <StepCard
            number="2"
            title="AI Processing"
            description="Our AI analyzes and indexes your content for optimal search."
            icon={<img src="/logo.svg" alt="AI Processing" className="w-6 h-6" />}
          />
          <StepCard
            number="3"
            title="Start Searching"
            description="Get instant, accurate answers from your documentation."
            icon={<MessageSquare className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
}