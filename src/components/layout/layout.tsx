import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from 'context/ThemeContext';
import Footer from 'components/footer/footer';
import Navbar from 'components/navbar/Navbar';
import BackToTop from 'components/backToTop/BackToTop';

const Layout: React.FC = () => {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <ScrollRestoration />
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
        <BackToTop />
      </MotionConfig>
    </ThemeProvider>
  );
};

export default Layout;
