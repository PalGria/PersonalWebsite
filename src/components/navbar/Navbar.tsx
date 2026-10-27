import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from 'context/ThemeContext';
import { CV_FILENAME, CV_PATH } from 'config/site';

const navLinks = [
  { label: 'About',    id: 'about'    },
  { label: 'Resume',   id: 'resume'   },
  { label: 'Projects', id: 'projects' },
  { label: 'Blog',     id: 'blog'     },
  { label: 'Contact',  id: 'contact'  },
];

// Both icons are rendered and toggled with `dark:` so the prerendered HTML
// matches whatever theme the visitor ends up with.
const ThemeIcon: React.FC<{ size: number }> = ({ size }) => (
  <>
    <FiMoon size={size} className="dark:hidden" />
    <FiSun size={size} className="hidden dark:block" />
  </>
);

const Navbar: React.FC = () => {
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  // Scroll spy — watches sections only on the home page
  useEffect(() => {
    setActiveSection('');
    if (!isHome) return;

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
  }, [isHome]);

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('');
    } else {
      navigate('/');
    }
  };

  const scrollTo = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // ScrollRestoration scrolls to the hash target once the home page renders
      navigate({ pathname: '/', hash: id });
    }
    setMenuOpen(false);
  };

  // The home hero is light in light mode; every other page starts on a dark background.
  const overLightHero = isHome && !scrolled;
  const textClass = scrolled
    ? 'text-gray-800 dark:text-gray-100'
    : overLightHero
      ? 'text-indigo-950 dark:text-white'
      : 'text-white';
  const activeClass = scrolled || overLightHero
    ? 'text-indigo-600 dark:text-indigo-400'
    : 'text-white';
  const cvClass = scrolled
    ? 'border-gray-400 dark:border-gray-500 text-gray-800 dark:text-gray-100'
    : overLightHero
      ? 'border-indigo-950/40 text-indigo-950 dark:border-white/70 dark:text-white'
      : 'border-white/70 text-white';
  const themeButtonClass = scrolled
    ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
    : overLightHero
      ? 'text-indigo-950 hover:bg-indigo-950/10 dark:text-white dark:hover:bg-white/20'
      : 'text-white hover:bg-white/20';

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
          aria-label="Home"
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
                aria-current={isActive ? 'location' : undefined}
                className={`relative text-sm font-medium transition-all ${
                  isActive ? activeClass : `hover:opacity-60 ${textClass}`
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
            href={CV_PATH}
            download={CV_FILENAME}
            className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border transition-opacity hover:opacity-70 ${cvClass}`}
          >
            <FiDownload size={13} />
            CV
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-1.5 rounded-full transition-colors ${themeButtonClass}`}
          >
            <ThemeIcon size={17} />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className={`md:hidden p-1.5 rounded transition-colors ${menuOpen ? 'text-gray-800 dark:text-gray-100' : textClass}`}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
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
                href={CV_PATH}
                download={CV_FILENAME}
                className="flex items-center gap-2 text-gray-800 dark:text-gray-100 font-medium hover:opacity-60"
              >
                <FiDownload size={15} />
                Download CV
              </a>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-gray-800 dark:text-gray-100 font-medium hover:opacity-60"
              >
                <ThemeIcon size={16} />
                <span className="dark:hidden">Dark mode</span>
                <span className="hidden dark:inline">Light mode</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
