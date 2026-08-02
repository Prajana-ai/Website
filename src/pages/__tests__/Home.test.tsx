import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { HomePage } from '../Home';

describe('HomePage', () => {
  it('leads with the collaboration thesis and featured products', () => {
    render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><HomePage /></MemoryRouter>);

    expect(screen.getByRole('heading', { level: 1, name: /intelligence is better/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /sourcearc/i }).some(link => link.getAttribute('href') === 'https://sourcearc.app')).toBe(true);
    expect(screen.getAllByRole('link', { name: /smara/i }).some(link => link.getAttribute('href') === 'https://smara.dev')).toBe(true);
    expect(screen.getByRole('link', { name: /start a conversation/i })).toHaveAttribute('href', '/contact-us');
  });
});
