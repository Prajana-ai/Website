import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <header className="relative pt-12 pb-8 lg:pt-16 lg:pb-10 flex items-center justify-center overflow-hidden">
      {/* Background with brand gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-prajana-ice-blue/30 via-white to-white dark:from-prajana-deep-blue dark:via-[#0B0A24] dark:to-prajana-deep-blue z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-7xl font-bold text-prajana-deep-blue dark:text-white mb-6 tracking-tight">
          prajana <span className="text-prajana-orange">AI</span> labs
        </h1>
        <p className="text-2xl text-prajana-deep-blue/80 dark:text-prajana-ice-blue/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Where Human Ingenuity and Artificial Intelligence Co-create. Discover the Future, Generated Together.
        </p>
        <Link
          to="/works"
          className="inline-block bg-gradient-to-r from-prajana-orange to-prajana-amber text-white px-8 py-3 rounded-full font-medium hover:shadow-xl hover:scale-105 transform transition-all shadow-lg hover:shadow-prajana-orange/50"
        >
          Explore Works
        </Link>
      </div>
    </header>
  );
}