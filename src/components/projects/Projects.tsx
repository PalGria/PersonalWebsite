import React, { useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import { projects, Project } from 'data/projects';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="flex flex-col bg-white dark:bg-gray-800/60 rounded-2xl p-7 shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
    >
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm flex-1 mb-5 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tech.map(t => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-5 border-t border-gray-100 dark:border-gray-700/50 pt-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FiExternalLink size={14} />
            Live
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FiGithub size={14} />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-indigo-500 dark:text-indigo-400 tracking-[0.2em] uppercase mb-2">
            03 — Projects
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Selected Work</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
