import { Zap, Shield } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';

export function Features() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<img src="/prajana-logo.png" alt="AI Search" className="w-8 h-8" />}
            title="AI-Powered Search"
            description="Advanced machine learning algorithms provide precise and contextual search results."
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Lightning Fast"
            description="Get instant answers with our optimized search engine built for speed."
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Secure & Private"
            description="Your documentation stays private with enterprise-grade security."
          />
        </div>
      </div>
    </section>
  );
}