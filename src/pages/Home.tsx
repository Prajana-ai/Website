import { Link } from 'react-router-dom';
import { Hero } from '../sections/Hero';


export function HomePage() {
  return (
    <>
      <main className="w-full">
        <Hero />

        <div className="container mx-auto px-4 pt-4 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* About Card */}
              <div className="bg-white/50 dark:bg-prajana-deep-blue/50 backdrop-blur-sm border border-prajana-deep-blue/10 dark:border-prajana-ice-blue/10 rounded-2xl p-8 text-center hover:shadow-xl hover:border-prajana-purple/30 dark:hover:border-prajana-cyan/30 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-prajana-deep-blue dark:text-white mb-3 group-hover:text-prajana-purple dark:group-hover:text-prajana-cyan transition-colors">
                  Our Story
                </h3>
                <p className="text-prajana-deep-blue/80 dark:text-prajana-ice-blue/80 mb-6 text-sm leading-relaxed">
                  Discover the vision behind prajana AI labs and our mission to create a future where human ingenuity and AI co-create.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center text-prajana-purple dark:text-prajana-cyan font-semibold text-sm hover:underline"
                >
                  Learn More
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* Works Card */}
              <div className="bg-white/50 dark:bg-prajana-deep-blue/50 backdrop-blur-sm border border-prajana-deep-blue/10 dark:border-prajana-ice-blue/10 rounded-2xl p-8 text-center hover:shadow-xl hover:border-prajana-purple/30 dark:hover:border-prajana-cyan/30 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-prajana-deep-blue dark:text-white mb-3 group-hover:text-prajana-purple dark:group-hover:text-prajana-cyan transition-colors">
                  Our Works
                </h3>
                <p className="text-prajana-deep-blue/80 dark:text-prajana-ice-blue/80 mb-6 text-sm leading-relaxed">
                  Explore our collection of AI-powered applications and tools designed to enhance human creativity and productivity.
                </p>
                <Link
                  to="/works"
                  className="inline-flex items-center text-prajana-purple dark:text-prajana-cyan font-semibold text-sm hover:underline"
                >
                  View Portfolio
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* Community Card */}
              <div className="bg-white/50 dark:bg-prajana-deep-blue/50 backdrop-blur-sm border border-prajana-deep-blue/10 dark:border-prajana-ice-blue/10 rounded-2xl p-8 text-center hover:shadow-xl hover:border-prajana-purple/30 dark:hover:border-prajana-cyan/30 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-prajana-deep-blue dark:text-white mb-3 group-hover:text-prajana-purple dark:group-hover:text-prajana-cyan transition-colors">
                  Join Us
                </h3>
                <p className="text-prajana-deep-blue/80 dark:text-prajana-ice-blue/80 mb-6 text-sm leading-relaxed">
                  Become part of our community of creators, developers, and innovators shaping the future of AI collaboration.
                </p>
                <Link
                  to="/community"
                  className="inline-flex items-center text-prajana-purple dark:text-prajana-cyan font-semibold text-sm hover:underline"
                >
                  Get Involved
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
