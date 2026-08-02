import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';

const navigationItems = [
  { text: 'Work', href: '/works' },
  { text: 'Studio', href: '/about' },
  { text: 'Vision', href: '/about-koxist' },
];

interface NavigationProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export function Navigation({ theme, setTheme }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav aria-label="Primary navigation" className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full px-4 transition-all sm:px-5 ${isScrolled ? 'border border-prajana-deep-blue/10 bg-white/90 shadow-[0_12px_40px_rgba(20,18,63,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-[#111033]/90' : 'bg-transparent'}`}>
        <Link to="/" className="group flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-prajana-purple" aria-label="Prajana AI Labs, home">
          <img src="/logo.png" alt="" className="h-10 w-auto transition-transform duration-300 group-hover:rotate-3" />
          <span className="hidden font-display text-lg font-semibold tracking-tight text-prajana-deep-blue dark:text-white sm:block">prajana <span className="text-prajana-orange">AI</span> labs</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigationItems.map(item => (
            <Link key={item.href} to={item.href} onClick={() => setIsMenuOpen(false)} aria-current={location.pathname === item.href ? 'page' : undefined} className={`rounded-full px-4 py-2 text-sm font-bold transition ${location.pathname === item.href ? 'bg-prajana-purple/10 text-prajana-purple dark:bg-prajana-cyan/10 dark:text-prajana-cyan' : 'text-prajana-deep-blue/70 hover:bg-prajana-deep-blue/5 hover:text-prajana-deep-blue dark:text-prajana-ice-blue/70 dark:hover:bg-white/5 dark:hover:text-white'}`}>
              {item.text}
            </Link>
          ))}
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="ml-2 rounded-full p-2.5 text-prajana-purple transition hover:bg-prajana-purple/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-prajana-purple dark:text-prajana-cyan" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <Link to="/contact-us" className="ml-3 rounded-full bg-prajana-deep-blue px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-prajana-purple dark:bg-prajana-cyan dark:text-prajana-deep-blue dark:hover:bg-white">Let’s build</Link>
        </div>

        <button onClick={() => setIsMenuOpen(value => !value)} className="rounded-full p-2 text-prajana-deep-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-prajana-purple dark:text-white md:hidden" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div id="mobile-navigation" className={`mx-4 mt-2 overflow-hidden rounded-3xl border border-prajana-deep-blue/10 bg-white/95 shadow-xl backdrop-blur-xl transition-all dark:border-white/10 dark:bg-[#111033]/95 md:hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 border-transparent opacity-0'}`}>
        <div className="space-y-1 p-4">
          {navigationItems.map(item => <Link key={item.href} to={item.href} onClick={() => setIsMenuOpen(false)} className="block rounded-2xl px-4 py-3 font-bold text-prajana-deep-blue hover:bg-prajana-purple/5 dark:text-white dark:hover:bg-white/5">{item.text}</Link>)}
          <div className="flex items-center gap-3 border-t border-prajana-deep-blue/10 pt-3 dark:border-white/10">
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="rounded-full p-3 text-prajana-purple dark:text-prajana-cyan" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>{theme === 'light' ? <Moon /> : <Sun />}</button>
            <Link to="/contact-us" className="flex-1 rounded-full bg-prajana-deep-blue px-5 py-3 text-center font-bold text-white dark:bg-prajana-cyan dark:text-prajana-deep-blue">Let’s build</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
