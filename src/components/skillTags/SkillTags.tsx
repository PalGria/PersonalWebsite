import React from 'react';
import {
  SiReact, SiTypescript, SiJavascript, SiVuedotjs, SiAngular,
  SiNextdotjs, SiNodedotjs, SiCss3, SiHtml5, SiTailwindcss,
  SiGit, SiGithub, SiGraphql, SiRedux, SiFigma, SiVite,
  SiFirebase, SiDocker, SiJest, SiWebpack, SiSass,
  SiMongodb, SiPostgresql, SiStorybook, SiNuxtdotjs, SiSvelte,
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { Skill } from 'types/content';

const iconMap: Record<string, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  'vue.js': SiVuedotjs,
  vue: SiVuedotjs,
  angular: SiAngular,
  'next.js': SiNextdotjs,
  nextjs: SiNextdotjs,
  'node.js': SiNodedotjs,
  nodejs: SiNodedotjs,
  css: SiCss3,
  html: SiHtml5,
  'tailwind css': SiTailwindcss,
  tailwind: SiTailwindcss,
  git: SiGit,
  github: SiGithub,
  graphql: SiGraphql,
  redux: SiRedux,
  figma: SiFigma,
  vite: SiVite,
  firebase: SiFirebase,
  docker: SiDocker,
  jest: SiJest,
  webpack: SiWebpack,
  sass: SiSass,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  postgres: SiPostgresql,
  storybook: SiStorybook,
  nuxt: SiNuxtdotjs,
  'nuxt.js': SiNuxtdotjs,
  svelte: SiSvelte,
};

interface SkillTagsProps {
  skills: Skill[];
}

const SkillTags: React.FC<SkillTagsProps> = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map(skill => {
        const Icon = iconMap[skill.name.toLowerCase()] ?? FaCode;
        return (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 select-none"
          >
            <Icon size={15} />
            {skill.name}
          </div>
        );
      })}
    </div>
  );
};

export default SkillTags;
