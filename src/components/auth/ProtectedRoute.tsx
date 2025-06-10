import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface ProtectedRouteProps {
  // No specific props needed for now, Outlet handles children
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
  const { user, loading } = useAuth();

  if (loading) {
    // You can render a loading spinner or a blank page while auth state is being determined
    return <div>Loading...</div>;
  }

  if (!user) {
    // User not authenticated, redirect to login page
    // You can pass the current location to redirect back after login if needed
    return <Navigate to="/admin/login" replace />;
  }

  // User is authenticated, render the child routes/components
  return <Outlet />;
};

export default ProtectedRoute;
