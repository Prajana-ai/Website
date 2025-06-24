import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AdminLoginPage from '../AdminLoginPage';

// Mock the useAuth hook
vi.mock('../../../context/AuthContext', () => ({
  useAuth: () => ({
    user: null,
    signInWithEmailPassword: vi.fn(),
    signOut: vi.fn(),
    // Add any other methods/properties used by the component
  }),
}));

// Mock the useNavigate hook
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

describe('AdminLoginPage', () => {
  it('renders the login page with a heading', () => {
    render(
      <MemoryRouter>
        <AdminLoginPage />
      </MemoryRouter>
    );

    // Check if the main heading is present
    expect(screen.getByRole('heading', { name: /Admin Login/i })).toBeInTheDocument();
  });
});
