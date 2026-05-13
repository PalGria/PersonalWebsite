import React, { useRef, useState } from 'react';
import { FiMail, FiCopy, FiCheck } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

interface ContactProps {
  email?: string;
  linkedIn?: string;
  github?: string;
}

const Contact: React.FC<ContactProps> = ({ email = '', linkedIn, github }) => {
  const EMAIL = email;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono text-indigo-500 dark:text-indigo-400 tracking-[0.2em] uppercase mb-4">
            05 — Contact
          </p>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get in touch
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-md mx-auto text-lg leading-relaxed">
            Open to new opportunities. Whether you have a role, a project, or just want to connect — my inbox is open.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 active:scale-95 transition-all shadow-sm text-base mb-12"
          >
            <FiMail size={18} />
            Say Hello
          </a>

          <div className="flex justify-center items-center gap-8 text-gray-400 dark:text-gray-500 flex-wrap">
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 hover:text-gray-700 dark:hover:text-gray-200 transition-colors text-sm group"
              aria-label="Copy email address"
            >
              <span className="transition-transform group-hover:scale-110">
                {copied ? <FiCheck size={15} className="text-green-500" /> : <FiCopy size={15} />}
              </span>
              <span className={copied ? 'text-green-500 dark:text-green-400' : ''}>
                {copied ? 'Copied!' : EMAIL}
              </span>
            </button>

            {linkedIn && (
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={21} />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={21} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
