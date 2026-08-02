/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import type { User as FirebaseUser } from 'firebase/auth';

// Define the shape of our User object (can be extended later)
export type User = FirebaseUser;

// Define the shape of the context value
interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithEmailPassword: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Create the context with a default undefined value
// We use undefined to ensure consumers check if the provider is available
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
