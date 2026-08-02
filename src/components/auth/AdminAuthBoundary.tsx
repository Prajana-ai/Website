import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthProvider';

export default function AdminAuthBoundary() {
  return <AuthProvider><Outlet /></AuthProvider>;
}
