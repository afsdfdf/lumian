'use client';

import Navigation from '../src/components/layout/Navigation';
import Footer from '../src/components/layout/Footer';
import BeijingBackground from '../src/components/shared/BeijingBackground';
import { ThemeProvider } from '../src/components/shared/ThemeProvider';
import { LanguageProvider } from '../src/context/LanguageContext';
import { useState, useEffect } from 'react';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // Hydration fix for dark mode
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        {/* Add beijing background to all pages */}
        <BeijingBackground />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="relative z-10 flex-grow">{mounted ? children : null}</main>
          <Footer />
        </div>
        
        {/* Scroll to top button */}
        <ScrollToTopButton />
      </LanguageProvider>
    </ThemeProvider>
  );
}

// Scroll to top button component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
} 