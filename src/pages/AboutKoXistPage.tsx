import React from 'react';

export const AboutKoXistPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-prajana-deep-blue dark:text-white sm:text-5xl mb-6 relative inline-block">
            The KoXist Foundation
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-prajana-purple to-prajana-cyan rounded-full"></span>
          </h1>
          <p className="mt-4 text-xl font-medium text-prajana-deep-blue/80 dark:text-prajana-ice-blue/80">
            Pioneering the Future of Human-AI Collaboration
          </p>
        </header>

        <div className="space-y-16">
          {/* Vision & Mission */}
          <section className="bg-prajana-ice-blue/30 dark:bg-prajana-deep-blue/10 rounded-2xl p-8 border border-prajana-purple/10">
            <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-4">Our Vision & Mission</h2>
            <p className="text-lg leading-relaxed text-prajana-deep-blue/80 dark:text-prajana-ice-blue/70">
              At The KoXist Foundation, we envision a world where human creativity and artificial intelligence collaborate harmoniously, unlocking unprecedented potential for innovation, creativity, and shared prosperity. Our mission is to cultivate a global community dedicated to the ethical and productive collaboration between humans and Generative AI. We empower individuals and organizations with the skills, frameworks, and ethical grounding necessary to thrive in this new era of work.
            </p>
          </section>

          {/* Core Values */}
          <section>
            <h2 className="text-3xl font-bold text-center text-prajana-deep-blue dark:text-white mb-10">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Symbiotic Collaboration", desc: "We believe humans and AI are collaborators, not competitors. We foster relationships where each enhances the other's capabilities for superior outcomes." },
                { title: "Grounded Ethics", desc: "Progress without principles is perilous. We ensure the development and deployment of AI are grounded in human values—prioritizing fairness, transparency, and accountability." },
                { title: "Inclusive Journeys", desc: "The future of AI must be built by everyone. We create Adaptive Pathways that make learning accessible and meaningful for people from all backgrounds and expertise levels." },
                { title: "Continuous Learning", desc: "The only constant is change. We champion a culture of lifelong learning and critical thinking, preparing our community to evolve alongside technology." }
              ].map((value, idx) => (
                <div key={idx} className="group p-6 bg-white dark:bg-prajana-deep-blue rounded-xl border border-prajana-purple/10 hover:border-prajana-cyan/30 shadow-sm hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-prajana-purple dark:text-prajana-cyan mb-3 group-hover:translate-x-1 transition-transform">{value.title}</h3>
                  <p className="text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Program */}
          <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-4">Our Program: The KoXist Development Journey</h2>
            <p className="text-lg leading-relaxed text-prajana-deep-blue/80 dark:text-prajana-ice-blue/70">
              Our program is a guided journey designed to build measurable mastery in Human-Generative AI Collaboration. Members, or "Scouts," progress through a series of Ranks that signify their growing mastery. This progression provides a clear path from novice to expert, covering foundational AI concepts, data understanding, and advanced model insights.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
