import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black border-t border-gray-800 text-white py-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="/" className="font-bold tracking-widest text-sm hover:opacity-70 transition-opacity">
          JMPA
        </a>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Jose Manuel Palau Alegria
        </p>
        <span className="text-gray-600 text-xs font-mono">
          React · TypeScript · Vite
        </span>
      </div>
    </footer>
  );
};

export default Footer;
