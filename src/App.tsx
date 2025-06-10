import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { WorksPage } from './pages/Works';
import { CommunityPage } from './pages/Community';
import { AppDetailPage } from './pages/AppDetailPage';
import { CreatorsListPage } from './pages/CreatorsListPage';
import { CreatorDetailPage } from './pages/creators/[creatorId]';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { ContactUsPage } from './pages/ContactUsPage';
import { AboutKoXistPage } from './pages/AboutKoXistPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { Footer } from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
    if (storedTheme) {
      return storedTheme;
    }
    return 'system';
  });

    const applyTheme = useCallback((currentTheme: 'light' | 'dark' | 'system') => {
    const root = window.document.documentElement;
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (currentTheme === 'dark' || (currentTheme === 'system' && isSystemDark)) {
      root.classList.remove('light');
      root.classList.add('dark');
      root.style.setProperty('--background-color-dark', 'var(--prajana-deep-blue)');
      root.style.setProperty('--text-color-dark', 'var(--prajana-ice-blue)');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.setProperty('--background-color-light', 'white'); // Or var(--prajana-ice-blue)
      root.style.setProperty('--text-color-light', 'var(--prajana-deep-blue)');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }, [theme, applyTheme]);

  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('system');
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, applyTheme]);

  return (
    <Router>
      <div className="min-h-screen bg-[var(--background-color-light)] dark:bg-[var(--background-color-dark)] text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] transition-colors duration-200 pt-16">
        <Navigation theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/works/:appId" element={<AppDetailPage />} />
          <Route path="/creators" element={<CreatorsListPage />} />
          <Route path="/creators/:creatorId" element={<CreatorDetailPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route path="dashboard" element={<AdminDashboardPage />} />
            {/* Add other protected admin routes here as children of /admin */}
          </Route>
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/about-koxist" element={<AboutKoXistPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;