import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AdminDashboardPage from '../AdminDashboardPage';

// Mock the useAuth hook
vi.mock('../../../context/AuthContext', () => ({
  useAuth: () => ({
    user: { uid: 'test-uid', email: 'test@example.com' },
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

// Mock Firestore functions
vi.mock('../../../lib/firebase', () => ({
  db: {
    collection: vi.fn().mockReturnThis(),
    doc: vi.fn().mockReturnThis(),
    get: vi.fn().mockResolvedValue({
      exists: true,
      data: () => ({ works: [] }),
    }),
    onSnapshot: vi.fn((_, callback) => {
      callback({
        docs: [
          {
            id: 'test-id',
            data: () => ({
              title: 'Test Work',
              description: 'Test Description',
              type: 'LargeFeatureWork',
            }),
          },
        ],
      });
      return vi.fn(); // Return unsubscribe function
    }),
  },
}));

describe('AdminDashboardPage', () => {
  it('renders the dashboard page with a heading', async () => {
    render(
      <MemoryRouter>
        <AdminDashboardPage />
      </MemoryRouter>
    );

    // Check if the main heading is present
    expect(await screen.findByRole('heading', { name: /Admin Dashboard/i })).toBeInTheDocument();
  });
});
