import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';

export function ContactUsPage() {
  return (
    <main className="section-shell py-16 sm:py-24">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <header>
          <p className="eyebrow">Start a collaboration</p>
          <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-prajana-deep-blue dark:text-white sm:text-7xl">Bring the problem you know unusually well.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-prajana-deep-blue/65 dark:text-prajana-ice-blue/65">Tell us what you understand that most software misses. We’re especially interested in ideas where human expertise, agentic workflows, and a clear path to a useful product meet.</p>
        </header>

        <aside className="rounded-[2rem] border border-prajana-deep-blue/10 bg-white p-7 shadow-[0_24px_60px_rgba(20,18,63,.08)] dark:border-white/10 dark:bg-white/[0.04] sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-prajana-purple/10 text-prajana-purple dark:bg-prajana-cyan/10 dark:text-prajana-cyan"><MessageCircle className="h-5 w-5" aria-hidden="true" /></div>
          <h2 className="mt-8 text-2xl font-bold text-prajana-deep-blue dark:text-white">A useful first note includes</h2>
          <ul className="mt-5 space-y-4 text-prajana-deep-blue/65 dark:text-prajana-ice-blue/65">
            <li className="border-l-2 border-prajana-orange pl-4">The problem and who feels it most.</li>
            <li className="border-l-2 border-prajana-magenta pl-4">The expertise or access you bring.</li>
            <li className="border-l-2 border-prajana-cyan pl-4">What a meaningful first outcome looks like.</li>
          </ul>
          <a href="mailto:info@prajana.ai?subject=Collaboration%20idea" className="button-primary mt-9 w-full">
            <Mail className="h-4 w-4" aria-hidden="true" /> Email the studio <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-4 text-center text-sm text-prajana-deep-blue/45 dark:text-prajana-ice-blue/45">info@prajana.ai</p>
        </aside>
      </div>
    </main>
  );
}
