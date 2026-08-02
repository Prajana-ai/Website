import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'Prajana AI Labs — Intelligence, built together', description: 'Prajana AI Labs turns shared human insight into useful, trustworthy AI products.' },
  '/works': { title: 'Work — Prajana AI Labs', description: 'Explore AI products shaped through collaboration, including SourceArc and Smara.' },
  '/about': { title: 'Studio — Prajana AI Labs', description: 'Meet the practice behind Prajana AI Labs and our approach to human–AI collaboration.' },
  '/about-koxist': { title: 'KoXist Vision — Prajana AI Labs', description: 'A vision for productive, ethical coexistence between humans and AI agents.' },
  '/contact-us': { title: 'Start a collaboration — Prajana AI Labs', description: 'Bring your expertise and explore a product collaboration with Prajana AI Labs.' },
};

const setMeta = (name: string, content: string, property = false) => {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(property ? 'property' : 'name', name);
    document.head.appendChild(element);
  }
  element.content = content;
};

export function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname] ?? { title: 'Prajana AI Labs', description: 'Human insight and agentic intelligence, built together.' };
    document.title = meta.title;
    setMeta('description', meta.description);
    setMeta('og:title', meta.title, true);
    setMeta('og:description', meta.description, true);
    setMeta('og:url', window.location.href, true);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
