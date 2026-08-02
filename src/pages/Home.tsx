import { ArrowRight, BrainCircuit, Compass, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Hero } from '../sections/Hero';

const products = [
  {
    name: 'SourceArc',
    mark: 'SA',
    collaborator: 'With Bharat Mabbu',
    statement: 'One source. Every channel, in its own voice.',
    description: 'Turn source material into channel-native drafts for X, LinkedIn, Reddit, and Medium—without giving up editorial control.',
    href: 'https://sourcearc.app',
    tone: 'source',
  },
  {
    name: 'Smara',
    mark: 'SM',
    collaborator: 'With Bharat Mabbu',
    statement: 'Give your agents a past.',
    description: 'Hybrid, API-first memory that turns an append-only record into durable facts and a queryable knowledge graph.',
    href: 'https://smara.dev',
    tone: 'smara',
  },
];

const practice = [
  { icon: Compass, title: 'Find the real edge', body: 'Start with the collaborator’s lived expertise, not a generic AI use case.' },
  { icon: BrainCircuit, title: 'Shape the intelligence', body: 'Design the agent, memory, and control model around how people actually decide.' },
  { icon: Layers3, title: 'Ship the system', body: 'Turn the insight into a product with a clear interface, durable architecture, and room to evolve.' },
];

export function HomePage() {
  return (
    <main>
      <Hero />

      <section className="section-shell py-24 sm:py-32" aria-labelledby="selected-work-heading">
        <div className="section-intro">
          <p className="eyebrow">Selected collaborations</p>
          <h2 id="selected-work-heading" className="section-heading">Two ideas. Two working products.</h2>
          <p className="section-copy">Different problems, built from the same conviction: AI should extend human agency, not flatten it.</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {products.map(product => (
            <a key={product.name} href={product.href} target="_blank" rel="noreferrer" className={`product-case product-case-${product.tone}`}>
              <div className="product-case-topline">
                <span>{product.collaborator}</span><ArrowRight className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="product-case-mark" aria-hidden="true">{product.mark}</div>
              <div className="relative z-10 mt-16 max-w-lg">
                <h3 className="font-display text-4xl font-semibold tracking-tight">{product.name}</h3>
                <p className="mt-3 text-xl font-semibold">{product.statement}</p>
                <p className="mt-4 leading-7 opacity-75">{product.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/works" className="text-link">See all work <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="border-y border-prajana-deep-blue/10 bg-prajana-ice-blue/25 py-24 dark:border-white/10 dark:bg-white/[0.025] sm:py-32" aria-labelledby="practice-heading">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="section-intro lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">The practice</p>
            <h2 id="practice-heading" className="section-heading">Collaboration is the method—not the tagline.</h2>
            <p className="section-copy">Prajana works at the seam between domain knowledge and agentic technology.</p>
          </div>
          <ol className="divide-y divide-prajana-deep-blue/10 border-y border-prajana-deep-blue/10 dark:divide-white/10 dark:border-white/10">
            {practice.map((item, index) => (
              <li key={item.title} className="grid gap-5 py-8 sm:grid-cols-[4rem_1fr] sm:py-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-prajana-purple/20 bg-white text-prajana-purple dark:bg-white/5 dark:text-prajana-cyan">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-prajana-purple/70 dark:text-prajana-cyan/70">Phase {index + 1}</p>
                  <h3 className="mt-2 text-2xl font-bold text-prajana-deep-blue dark:text-white">{item.title}</h3>
                  <p className="mt-3 max-w-xl leading-7 text-prajana-deep-blue/65 dark:text-prajana-ice-blue/65">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell py-24 sm:py-32">
        <div className="collaboration-cta">
          <p className="eyebrow text-prajana-cyan">Have an idea with an unfair human advantage?</p>
          <h2 className="font-display mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">Bring the expertise. We’ll help shape the intelligence around it.</h2>
          <Link to="/contact-us" className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-prajana-deep-blue transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
