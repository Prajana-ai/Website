import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const primaryLinks = [
  { name: 'Work', path: '/works' },
  { name: 'Studio', path: '/about' },
  { name: 'KoXist vision', path: '/about-koxist' },
  { name: 'Contact', path: '/contact-us' },
];

export function Footer() {
  return (
    <footer className="border-t border-prajana-deep-blue/10 bg-[#f8f8fc] py-14 dark:border-white/10 dark:bg-[#0d0c2a]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-3" aria-label="Prajana AI Labs, home">
            <img src="/logo.png" alt="" className="h-11 w-auto" />
            <span className="font-display text-2xl font-semibold text-prajana-deep-blue dark:text-white">prajana <span className="text-prajana-orange">AI</span> labs</span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-prajana-deep-blue/60 dark:text-prajana-ice-blue/60">Products born where human expertise meets agentic intelligence. A KoXist Foundation initiative.</p>
          <a href="mailto:info@prajana.ai" className="text-link mt-6">info@prajana.ai <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-prajana-deep-blue/45 dark:text-prajana-ice-blue/45">Explore</h2>
            <ul className="mt-5 space-y-3">{primaryLinks.map(link => <li key={link.path}><Link to={link.path} className="font-semibold text-prajana-deep-blue/70 transition hover:text-prajana-purple dark:text-prajana-ice-blue/70 dark:hover:text-prajana-cyan">{link.name}</Link></li>)}</ul>
          </div>
          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-prajana-deep-blue/45 dark:text-prajana-ice-blue/45">Products</h2>
            <ul className="mt-5 space-y-3">
              <li><a href="https://sourcearc.app" target="_blank" rel="noreferrer" className="font-semibold text-prajana-deep-blue/70 transition hover:text-prajana-purple dark:text-prajana-ice-blue/70 dark:hover:text-prajana-cyan">SourceArc ↗</a></li>
              <li><a href="https://smara.dev" target="_blank" rel="noreferrer" className="font-semibold text-prajana-deep-blue/70 transition hover:text-prajana-purple dark:text-prajana-ice-blue/70 dark:hover:text-prajana-cyan">Smara ↗</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-prajana-deep-blue/45 dark:text-prajana-ice-blue/45">Legal</h2>
            <ul className="mt-5 space-y-3">
              <li><Link to="/privacy-policy" className="font-semibold text-prajana-deep-blue/70 transition hover:text-prajana-purple dark:text-prajana-ice-blue/70">Privacy</Link></li>
              <li><Link to="/terms-of-service" className="font-semibold text-prajana-deep-blue/70 transition hover:text-prajana-purple dark:text-prajana-ice-blue/70">Terms</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-prajana-deep-blue/10 px-6 pt-7 text-sm text-prajana-deep-blue/45 dark:border-white/10 dark:text-prajana-ice-blue/40 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Prajana AI Labs.</p><p>Human judgment stays in the loop.</p>
      </div>
    </footer>
  );
}
