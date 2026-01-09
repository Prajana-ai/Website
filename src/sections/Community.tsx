
export function Community() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-prajana-deep-blue dark:text-white mb-6 relative inline-block">
            Join the Collective. Generate with Us.
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-prajana-purple to-prajana-cyan rounded-full"></span>
          </h2>
          <p className="text-lg text-prajana-deep-blue/80 dark:text-prajana-ice-blue/80 mb-6 leading-relaxed">
            prajana AI labs thrives on the diverse talents and perspectives of individuals and teams. Whether you are an AI developer, a researcher, a creative, or part of a team exploring the frontiers of human-AI interaction, we invite you to contribute to our growing ecosystem.
          </p>
          <p className="text-lg text-prajana-deep-blue/80 dark:text-prajana-ice-blue/80 mb-8 leading-relaxed">
            Share your AI apps, agents, or any work that aligns with the KoXist ethos. Let's build the future of intelligent collaboration, together.
          </p>
        </div>

        <div className="text-center">
          <button className="bg-prajana-purple hover:bg-prajana-deep-blue text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-prajana-cyan/30">
            Become a Contributor
          </button>
        </div>
      </div>
    </section>
  );
}
