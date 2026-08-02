import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AdminDashboardPage from '../AdminDashboardPage';

// Mock the useAuth hook
vi.mock('../../../context/AuthContext', () => ({
  useAuth: () => ({
    user: { uid: 'test-uid', email: 'test@example.com' },
    loading: false,
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

vi.mock('../../../lib/workService', () => ({
  getWorks: vi.fn().mockResolvedValue([]),
  addWork: vi.fn(),
  updateWork: vi.fn(),
  deleteWork: vi.fn(),
}));

vi.mock('../../../lib/creatorService', () => ({
  getCreators: vi.fn().mockResolvedValue([]),
  addCreator: vi.fn(),
  updateCreator: vi.fn(),
  deleteCreator: vi.fn(),
}));

describe('AdminDashboardPage', () => {
  it('renders the dashboard page with a heading', async () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AdminDashboardPage />
      </MemoryRouter>
    );

    // Check if the main heading is present
    expect(await screen.findByRole('heading', { name: /Admin Dashboard/i })).toBeInTheDocument();
  });
});
