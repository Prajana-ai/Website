import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { RouteMeta } from './components/RouteMeta';

const HomePage = lazy(() => import('./pages/Home').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./pages/About').then(module => ({ default: module.AboutPage })));
const WorksPage = lazy(() => import('./pages/Works').then(module => ({ default: module.WorksPage })));
const CommunityPage = lazy(() => import('./pages/Community').then(module => ({ default: module.CommunityPage })));
const AppDetailPage = lazy(() => import('./pages/AppDetailPage').then(module => ({ default: module.AppDetailPage })));
const CreatorsListPage = lazy(() => import('./pages/CreatorsListPage').then(module => ({ default: module.CreatorsListPage })));
const CreatorDetailPage = lazy(() => import('./pages/creators/[creatorId]').then(module => ({ default: module.CreatorDetailPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(module => ({ default: module.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage').then(module => ({ default: module.TermsOfServicePage })));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage').then(module => ({ default: module.ContactUsPage })));
const AboutKoXistPage = lazy(() => import('./pages/AboutKoXistPage').then(module => ({ default: module.AboutKoXistPage })));
const AdminAuthBoundary = lazy(() => import('./components/auth/AdminAuthBoundary'));
const ProtectedRoute = lazy(() => import('./components/auth/ProtectedRoute'));
const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'));

function PageFallback() {
  return <main className="grid min-h-[60vh] place-items-center" aria-live="polite"><div className="h-8 w-8 animate-spin rounded-full border-2 border-prajana-purple/20 border-t-prajana-purple" aria-label="Loading page" /></main>;
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const applyTheme = useCallback((currentTheme: 'light' | 'dark') => {
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    document.documentElement.classList.toggle('light', currentTheme === 'light');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }, [theme, applyTheme]);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <RouteMeta />
      <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-full bg-prajana-deep-blue px-4 py-2 font-bold text-white transition focus:translate-y-0">Skip to content</a>
      <div className="min-h-screen bg-[var(--background-color-light)] text-[var(--text-color-light)] transition-colors duration-200 dark:bg-[var(--background-color-dark)] dark:text-[var(--text-color-dark)] pt-24">
        <Navigation theme={theme} setTheme={setTheme} />
        <div id="main-content">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/works" element={<WorksPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/works/:appId" element={<AppDetailPage />} />
              <Route path="/creators" element={<CreatorsListPage />} />
              <Route path="/creators/:creatorId" element={<CreatorDetailPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/about-koxist" element={<AboutKoXistPage />} />
              <Route path="/admin" element={<AdminAuthBoundary />}>
                <Route path="login" element={<AdminLoginPage />} />
                <Route element={<ProtectedRoute />}>
                  <Route index element={<Navigate to="dashboard" replace />} />
                  <Route path="dashboard" element={<AdminDashboardPage />} />
                </Route>
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
