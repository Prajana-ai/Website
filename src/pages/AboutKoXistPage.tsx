import React from 'react';

export const AboutKoXistPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          The KoXist Foundation
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Pioneering the Future of Human-AI Collaboration
        </p>
      </header>

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Our Vision & Mission</h2>
          <p>
            At The KoXist Foundation, we envision a world where human creativity and artificial intelligence collaborate harmoniously, unlocking unprecedented potential for innovation, creativity, and shared prosperity. Our mission is to cultivate a global community dedicated to the ethical and productive collaboration between humans and Generative AI. We empower individuals and organizations with the skills, frameworks, and ethical grounding necessary to thrive in this new era of work.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Our Core Values</h2>
          <p>
            Four fundamental pillars guide every program we create, every partnership we form, and every message we share:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-5 mt-4">
            <li>
              <strong>Symbiotic Collaboration:</strong> We believe humans and AI are collaborators, not competitors. We foster relationships where each enhances the other's capabilities for superior outcomes.
            </li>
            <li>
              <strong>Grounded Ethics:</strong> Progress without principles is perilous. We ensure the development and deployment of AI are grounded in human values—prioritizing fairness, transparency, and accountability in every application.
            </li>
            <li>
              <strong>Inclusive Journeys:</strong> The future of AI must be built by everyone. We create Adaptive Pathways that make learning accessible and meaningful for people from all backgrounds, roles, and levels of technical expertise.
            </li>
            <li>
              <strong>Continuous Learning:</strong> The only constant is change. We champion a culture of lifelong learning and critical thinking, preparing our community to evolve alongside technology by engaging with a library of Dynamic Challenges.
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Our Program: The KoXist Development Journey</h2>
          <p>
            Our program is a guided journey designed to build measurable mastery in Human-Generative AI Collaboration. Members, or "Scouts," progress through a series of Ranks that signify their growing mastery and understanding of Human-AI collaboration. This progression provides a clear and motivating path from novice to expert, covering foundational AI/GenAI concepts, data understanding, and advanced model insights.
          </p>
        </section>
      </div>
    </div>
  );
};
