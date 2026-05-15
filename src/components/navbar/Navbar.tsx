import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from 'context/ThemeContext';

const navLinks = [
  { label: 'About',    id: 'about'    },
  { label: 'Resume',   id: 'resume'   },
  { label: 'Projects', id: 'projects' },
  { label: 'Blog',     id: 'blog'     },
  { label: 'Contact',  id: 'contact'  },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll spy — watches sections only on the home page
  useEffect(() => {
    setActiveSection('');
    if (pathname !== '/') return;

    const observers: IntersectionObserver[] = [];

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [pathname]);

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('');
    } else {
      navigate('/');
    }
  };

  const scrollTo = (id: string) => {
    if (pathname !== '/') {
      navigate('/');
      // brief delay so sections mount before scrolling
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const textClass = scrolled ? 'text-gray-800 dark:text-gray-100' : 'text-white';

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between h-16">
        <button
          onClick={handleLogoClick}
          className={`font-bold text-lg tracking-widest transition-opacity hover:opacity-70 ${textClass}`}
        >
          JMPA
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative text-sm font-medium transition-all ${
                  isActive
                    ? scrolled
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-white'
                    : `hover:opacity-60 ${textClass}`
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400" />
                )}
              </button>
            );
          })}
          <a
            href="/cv.pdf"
            download="Jose_MP_Alegria_Resume.pdf"
            className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border transition-opacity hover:opacity-70 ${
              scrolled
                ? 'border-gray-400 dark:border-gray-500 text-gray-800 dark:text-gray-100'
                : 'border-white/70 text-white'
            }`}
          >
            <FiDownload size={13} />
            CV
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-1.5 rounded-full transition-colors ${
              scrolled
                ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          className={`md:hidden p-1.5 rounded transition-colors ${textClass}`}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
          >
            <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left font-medium hover:opacity-60 ${
                    activeSection === link.id
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-800 dark:text-gray-100'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/cv.pdf"
                download="Jose_MP_Alegria_Resume.pdf"
                className="flex items-center gap-2 text-gray-800 dark:text-gray-100 font-medium hover:opacity-60"
              >
                <FiDownload size={15} />
                Download CV
              </a>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-gray-800 dark:text-gray-100 font-medium hover:opacity-60"
              >
                {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
