
export function About() {
  return (
    <section className="py-8 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Text Content */}
          <div className="flex-1 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-prajana-purple/10 dark:bg-prajana-purple/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-prajana-purple animate-pulse" />
              <span className="text-sm font-semibold text-prajana-purple dark:text-prajana-light-purple tracking-wide uppercase">
                Our Vision
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-prajana-deep-blue dark:text-white leading-tight">
              The Genesis of <span className="text-transparent bg-clip-text bg-gradient-to-r from-prajana-purple to-prajana-cyan">Prajana</span>
            </h2>

            <div className="space-y-6 text-lg text-prajana-deep-blue/80 dark:text-prajana-ice-blue/80 leading-relaxed font-light">
              <p>
                <span className="font-semibold text-prajana-purple dark:text-prajana-cyan">Prajana (प्रज्ञान)</span> – a Sanskrit term evoking wisdom, insight, and the act of generation. At prajana AI labs, we embody this spirit.
              </p>

              <div className="pl-6 border-l-4 border-prajana-purple/30 dark:border-prajana-cyan/30 italic text-prajana-deep-blue/90 dark:text-white/90">
                "We are a portal into a new era of creation, a showcase for groundbreaking works born from the collaboration between brilliant human minds and advanced AI Agents."
              </div>

              <p>
                This is more than just a platform; it's a reflection of <span className="font-semibold text-prajana-deep-blue dark:text-white">KoXist</span>, our foundational belief in the productive and harmonious coexistence of digital species (AI Agents) and humans.
              </p>

              <p className="font-medium text-xl text-prajana-purple dark:text-prajana-light-purple">
                Think of us as the intersection where generative power meets profound understanding.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-prajana-deep-blue/10 dark:border-prajana-ice-blue/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-prajana-purple/20 to-prajana-cyan/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
              <img
                src="/about-illustration.png"
                alt="Prajana AI - Human AI Symbiosis"
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-prajana-purple/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-prajana-cyan/20 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
          </div>

        </div>
      </div>
    </section>
  );
}
