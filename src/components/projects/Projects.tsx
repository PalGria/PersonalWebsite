import React, { useRef, useState } from 'react';
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Project } from 'types/content';

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (delta: number) => {
    setDirection(delta);
    setCurrent(i => (i + delta + projects.length) % projects.length);
  };

  const project = projects[current];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950 scroll-mt-16">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase mb-2">
            03 — Projects
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Selected Work</h2>
        </motion.div>

        {!project ? (
          <p className="py-16 text-center text-gray-500 dark:text-gray-500">
            Projects coming soon.
          </p>
        ) : (
          <div className="relative">
            {/* Cards */}
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/50 rounded-3xl p-10 md:p-14 shadow-sm"
                >
                  {/* Number badge */}
                  <span className="inline-block text-xs font-mono text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-6">
                    {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-5">
                    {project.projectTitle}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                    {project.projectDescriptionLong}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.map(t => (
                      <span
                        key={t}
                        className="text-sm px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-6 border-t border-gray-200 dark:border-gray-700/50 pt-6">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <FiExternalLink size={16} />
                        Live demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <FiGithub size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Nav row */}
            {projects.length > 1 && (
              <div className="flex items-center justify-between mt-8">
                {/* Dots */}
                <div className="flex gap-2">
                  {projects.map((p, i) => (
                    <button
                      key={p.projectTitle + i}
                      onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                      className={`rounded-full transition-all duration-200 ${
                        i === current
                          ? 'w-6 h-2.5 bg-indigo-500'
                          : 'w-2.5 h-2.5 bg-gray-200 dark:bg-gray-700 hover:bg-indigo-300 dark:hover:bg-indigo-700'
                      }`}
                      aria-label={`Go to project ${i + 1}`}
                      aria-current={i === current ? 'true' : undefined}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={() => go(-1)}
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-400 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-all duration-200"
                    aria-label="Previous project"
                  >
                    <FiChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => go(1)}
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-400 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-all duration-200"
                    aria-label="Next project"
                  >
                    <FiChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
