import { ArrowRight, Orbit, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            Intelligence is better when it is built <span className="text-gradient">together.</span>
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

        <div className="relative mx-auto h-[420px] w-full max-w-[480px]" aria-label="Human insight connecting to shipped AI products">
          <div className="signal-orbit signal-orbit-outer" />
          <div className="signal-orbit signal-orbit-inner" />
          <div className="signal-core">
            <Orbit className="h-8 w-8" aria-hidden="true" />
            <span>Shared<br />insight</span>
          </div>
          <a className="signal-node signal-node-source" href="https://sourcearc.app" target="_blank" rel="noreferrer">
            <span className="signal-node-mark">SA</span>
            <span><strong>SourceArc</strong><small>Personal voice, multiplied</small></span>
          </a>
          <a className="signal-node signal-node-smara" href="https://smara.dev" target="_blank" rel="noreferrer">
            <span className="signal-node-mark">SM</span>
            <span><strong>Smara</strong><small>Memory agents can defend</small></span>
          </a>
          <div className="signal-pulse signal-pulse-one" />
          <div className="signal-pulse signal-pulse-two" />
        </div>
      </div>
    </header>
  );
}
