import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import Seo from 'components/seo/Seo';
import { SITE_NAME } from 'config/site';

export const Component: React.FC = () => {
  return (
    <div className="min-h-screen bg-dots-pattern bg-brand flex items-center justify-center">
      <Seo title={`Page not found | ${SITE_NAME}`} path="/404" noIndex />
      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="text-indigo-400 font-mono text-sm tracking-[0.35em] uppercase mb-6">
          404
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Page not found
        </h1>
        <p className="text-white/50 text-lg mb-10 max-w-sm mx-auto leading-relaxed">
          This page doesn&apos;t exist or has been moved somewhere else.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 active:scale-95 transition-all"
        >
          <FiArrowLeft size={18} />
          Back home
        </Link>
      </motion.div>
    </div>
  );
};
