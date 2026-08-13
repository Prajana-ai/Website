import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const readPublicPage = (path: string) => readFileSync(resolve(process.cwd(), 'public', path), 'utf8');

describe('WatchHub public pages', () => {
  it('publishes the product page with canonical metadata and required claims', () => {
    const html = readPublicPage('watchhub/index.html');

    expect(html).toContain('<title>WatchHub — Movies, TV &amp; Your Private Watchlist</title>');
    expect(html).toContain('href="https://prajana.ai/watchhub"');
    expect(html).toContain('Discover a century of screen stories.');
    expect(html).toContain('does not stream or download video');
    expect(html).toContain('not endorsed or certified by TMDB');
  });

  it('publishes the complete privacy policy without the internal implementation note', () => {
    const html = readPublicPage('watchhub/privacy/index.html');

    expect(html).toContain('<title>WatchHub Privacy Policy</title>');
    expect(html).toContain('href="https://prajana.ai/watchhub/privacy"');
    expect(html).toContain('August 12, 2026');
    expect(html).toContain('Google authentication');
    expect(html).toContain('Firebase Authentication and Google Cloud Platform');
    expect(html).toContain('mailto:bharat@prajana.ai');
    expect(html).not.toContain('This policy is publicly available');
  });

  it('publishes support information and a real email link', () => {
    const html = readPublicPage('watchhub/support/index.html');

    expect(html).toContain('<title>WatchHub Support</title>');
    expect(html).toContain('href="https://prajana.ai/watchhub/support"');
    expect(html).toContain('mailto:bharat@prajana.ai');
    expect(html).toContain('Your WatchHub version and build number');
    expect(html).toContain('Do not send passwords');
  });
});
