import { ArrowRight, Handshake, ShieldCheck, Waypoints } from 'lucide-react';
import { Link } from 'react-router-dom';

const principles = [
  { icon: Handshake, title: 'Co-create, don’t automate away', body: 'The strongest products preserve the judgment, taste, and accountability of the people closest to the problem.' },
  { icon: Waypoints, title: 'Design the whole system', body: 'A model is one component. We shape memory, tools, interfaces, feedback loops, and operating boundaries together.' },
  { icon: ShieldCheck, title: 'Make trust inspectable', body: 'Useful intelligence should expose its sources, uncertainty, and controls instead of asking people for blind confidence.' },
];

export function About() {
  return (
    <div className="py-16 sm:py-24">
      <header className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="eyebrow">The studio</p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-prajana-deep-blue dark:text-white sm:text-7xl">A lab for ideas that need both human depth and machine reach.</h1>
          <p className="text-lg leading-8 text-prajana-deep-blue/65 dark:text-prajana-ice-blue/65">Prajana—प्रज्ञान—evokes wisdom, insight, and generation. We build at that intersection: working alongside domain experts to turn their knowledge into products that remain legible, useful, and human-directed.</p>
        </div>
      </header>

      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-prajana-deep-blue px-7 py-14 text-white sm:px-14 sm:py-20">
          <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-prajana-cyan/25 shadow-[0_0_0_70px_rgba(0,203,212,.04),0_0_0_140px_rgba(206,71,192,.035)]" aria-hidden="true" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-prajana-cyan">Our thesis</p>
          <blockquote className="font-display relative mt-6 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">“AI becomes more valuable when it carries human context forward—not when it erases the person who supplied it.”</blockquote>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8" aria-labelledby="principles-heading">
        <div className="section-intro"><p className="eyebrow">Operating principles</p><h2 id="principles-heading" className="section-heading">How we choose and shape the work.</h2></div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-prajana-deep-blue/10 bg-prajana-deep-blue/10 dark:border-white/10 dark:bg-white/10 md:grid-cols-3">
          {principles.map(principle => <article key={principle.title} className="bg-white p-8 dark:bg-[#121034]"><principle.icon className="h-6 w-6 text-prajana-purple dark:text-prajana-cyan" aria-hidden="true" /><h3 className="mt-8 text-xl font-bold text-prajana-deep-blue dark:text-white">{principle.title}</h3><p className="mt-3 leading-7 text-prajana-deep-blue/60 dark:text-prajana-ice-blue/60">{principle.body}</p></article>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-col gap-6 border-t border-prajana-deep-blue/10 pt-10 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-display text-3xl font-semibold text-prajana-deep-blue dark:text-white">The deeper vision is KoXist.</p><p className="mt-2 text-prajana-deep-blue/60 dark:text-prajana-ice-blue/60">A productive, ethical coexistence between people and digital species.</p></div>
          <Link to="/about-koxist" className="button-secondary">Explore KoXist <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
}
