import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AuthModal } from './components/AuthModal';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { HowItWorks } from './sections/HowItWorks';
import { CTA } from './sections/CTA';
import { GettingStarted } from './pages/GettingStarted';
import { DocumentationSearch } from './pages/use-cases/DocumentationSearch';
import { KnowledgeBase } from './pages/use-cases/KnowledgeBase';
import { ApiDocumentation } from './pages/use-cases/ApiDocumentation';
import { Docs } from './pages/Docs';
import { Pricing } from './pages/Pricing';
import { Blog } from './pages/Blog';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </>
  );
}

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement actual authentication logic
    console.log('Auth submitted:', { email, password, isSignUp });
  };

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navigation
          isDark={isDark}
          setIsDark={setIsDark}
          onOpenAuth={() => setIsAuthModalOpen(true)}
        />
        
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          isSignUp={isSignUp}
          setIsSignUp={setIsSignUp}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={handleSubmit}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/use-cases/documentation-search" element={<DocumentationSearch />} />
          <Route path="/use-cases/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/use-cases/api-documentation" element={<ApiDocumentation />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;