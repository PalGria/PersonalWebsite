import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from 'context/ThemeContext';
import './hero.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
  video?: string;
  backgroundColor?: string;
  twitterLink?: string;
  linkedinLink?: string;
  githubLink?: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  backgroundColor: string;
  twitterLink: string;
  linkedinLink: string;
  githubLink: string;
}

const sparkleDots = [
  { top: '9%',  left: '5%',   duration: '3.2s', delay: '0s'    },
  { top: '7%',  left: '24%',  duration: '4.1s', delay: '1.1s'  },
  { top: '14%', left: '54%',  duration: '3.7s', delay: '0.5s'  },
  { top: '6%',  left: '80%',  duration: '4.4s', delay: '2.0s'  },
  { top: '11%', left: '94%',  duration: '3.0s', delay: '0.8s'  },
  { top: '34%', left: '2%',   duration: '4.2s', delay: '1.6s'  },
  { top: '40%', left: '97%',  duration: '3.5s', delay: '0.3s'  },
  { top: '58%', left: '11%',  duration: '4.0s', delay: '2.3s'  },
  { top: '66%', left: '47%',  duration: '3.3s', delay: '1.4s'  },
  { top: '74%', left: '74%',  duration: '4.5s', delay: '0.7s'  },
  { top: '84%', left: '27%',  duration: '3.8s', delay: '1.9s'  },
  { top: '89%', left: '61%',  duration: '3.6s', delay: '2.7s'  },
  { top: '87%', left: '89%',  duration: '4.3s', delay: '0.4s'  },
  { top: '51%', left: '34%',  duration: '3.1s', delay: '3.0s'  },
  { top: '27%', left: '67%',  duration: '4.6s', delay: '1.2s'  },
  { top: '77%', left: '4%',   duration: '3.4s', delay: '2.5s'  },
  { top: '20%', left: '38%',  duration: '4.8s', delay: '0.9s'  },
  { top: '62%', left: '82%',  duration: '3.9s', delay: '1.7s'  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC<HeroProps> = ({
  title, subtitle, image, video, backgroundColor,
  twitterLink, linkedinLink, githubLink,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const bg = isDark ? (backgroundColor || '#140453') : '#f5f3ff';
  const textPrimary   = isDark ? 'text-white'      : 'text-indigo-950';
  const textSecondary = isDark ? 'text-white/70'   : 'text-indigo-900/60';
  const textMuted     = isDark ? 'text-white/35'   : 'text-indigo-900/30';
  const iconColor     = isDark ? 'text-white/60 hover:text-blue-400'  : 'text-indigo-800/50 hover:text-indigo-600';
  const iconColorGh   = isDark ? 'text-white/60 hover:text-gray-300'  : 'text-indigo-800/50 hover:text-indigo-900';
  const badgeBorder   = isDark ? 'border-white/15 bg-white/5'         : 'border-indigo-300/40 bg-indigo-100/60';
  const badgeText     = isDark ? 'text-white/75'                      : 'text-indigo-800/80';

  return (
    <div
      className="relative w-full h-screen bg-dots-pattern overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: bg }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full blur-[120px] opacity-25"
          style={{
            width: '560px', height: '560px',
            background: 'radial-gradient(circle, #6366f1, transparent)',
            top: '50%', left: '45%',
            transform: 'translate(-50%, -55%)',
          }}
        />
        <div
          className="absolute rounded-full blur-[100px] opacity-15"
          style={{
            width: '380px', height: '380px',
            background: 'radial-gradient(circle, #a855f7, transparent)',
            top: '35%', left: '60%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Twinkling dots */}
      {sparkleDots.map((dot, i) => (
        <div
          key={i}
          className="sparkle-dot"
          style={{ top: dot.top, left: dot.left, animationDuration: dot.duration, animationDelay: dot.delay }}
        />
      ))}

      {/* Background image / video */}
      {image ? (
        <img src={image} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
      ) : video ? (
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      ) : null}

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {/* Availability badge */}
        <motion.div
          className={`flex items-center gap-2.5 px-5 py-2 rounded-full border ${badgeBorder} backdrop-blur-sm mb-8`}
          variants={itemVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <span className={`${badgeText} text-sm font-light tracking-wider`}>Available for new roles</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className={`text-5xl md:text-7xl font-extrabold mb-2 text-center tracking-tight ${textPrimary}`}
          variants={itemVariants}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {title}
        </motion.h1>

        {/* Animated accent line */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '200px', opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.65, ease: 'easeOut' }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Subtitle */}
        <motion.p
          className={`text-lg md:text-xl ${textSecondary} mb-10 text-center font-light tracking-wide max-w-lg`}
          variants={itemVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {subtitle}
        </motion.p>

        {/* Social icons */}
        <motion.div
          className="flex space-x-6"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {twitterLink && (
            <a href={twitterLink} target="_blank" rel="noopener noreferrer" aria-label="Twitter"
              className={`${iconColor} transition-colors hover:scale-110 transform duration-200`}>
              <FaTwitter size={26} />
            </a>
          )}
          {linkedinLink && (
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className={`${iconColor} transition-colors hover:scale-110 transform duration-200`}>
              <FaLinkedin size={26} />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className={`${iconColorGh} transition-colors hover:scale-110 transform duration-200`}>
              <FaGithub size={26} />
            </a>
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 ${textMuted} hover:opacity-60 transition-colors z-10`}
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to content"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase font-light">scroll</span>
        <FiChevronDown size={16} />
      </motion.button>
    </div>
  );
};

export default Hero;
