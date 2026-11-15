import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const productIndex = [
  { name: 'SourceArc', detail: 'Personal branding', href: 'https://sourcearc.app', mark: 'SA' },
  { name: 'Smara', detail: 'Agentic memory', href: 'https://smara.dev', mark: 'SM' },
  { name: 'WatchHub', detail: 'Private watchlist', href: '/watchhub', mark: 'WH' },
  { name: 'NATOAlpha', detail: 'Phonetic utility', href: '/natoalpha/', mark: 'NA' },
];

export function Hero() {
  return (
    <header className="signal-field relative isolate overflow-hidden border-b border-prajana-deep-blue/10 dark:border-white/10">
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        <div className="relative z-10 max-w-3xl">
          <div className="eyebrow mb-7">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Human insight × agentic systems
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-prajana-deep-blue dark:text-white sm:text-7xl lg:text-[5.75rem]">
            Intelligence is better when it is built <span className="text-[#315f78] dark:text-[#8fbfc7]">together.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70 sm:text-xl">
            Prajana AI Labs turns shared insight into working products—pairing human judgment with AI agents to create tools people can trust and use.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/works" className="button-primary">
              Explore the work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/contact-us" className="button-secondary">Start a collaboration</Link>
          </div>
        </div>

        <div className="product-index" aria-label="Prajana products">
          <div className="product-index-header">
            <span>Current work</span>
            <span>04 products</span>
          </div>
          {productIndex.map(product => (
            <a key={product.name} className="product-index-row" href={product.href} {...(product.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
              <span className="product-index-mark" aria-hidden="true">{product.mark}</span>
              <span><strong>{product.name}</strong><small>{product.detail}</small></span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
