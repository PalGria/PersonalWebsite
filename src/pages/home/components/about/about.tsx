import React from 'react';
import SkillTags from 'components/skillTags/SkillTags';
import BrandsCarousel from 'components/brandsCarousel/brandsCarousel';
import AnimatedSection from 'components/animatedSection/AnimatedSection';
import { Brand, Skill } from 'types/content';

interface AboutProps {
  aboutMe: string;
  brands: Brand[];
  techStack: Skill[];
}

const About: React.FC<AboutProps> = ({ aboutMe, brands, techStack }) => {
  return (
    <section id="about" className="bg-white dark:bg-gray-950 py-20 scroll-mt-16">
      <div className="mx-auto max-w-4xl px-4">
        <AnimatedSection>
          <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase mb-2">
            01 — About
          </p>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About me</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            {aboutMe}
          </p>
        </AnimatedSection>

        {techStack.length > 0 && (
          <AnimatedSection delay={0.1} className="mt-16">
            <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase mb-2">
              Tech Stack
            </p>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Skills</h2>
            <SkillTags skills={techStack} />
          </AnimatedSection>
        )}

        {brands.length > 0 && (
          <AnimatedSection delay={0.2} className="mt-16">
            <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase mb-2">
              Experience
            </p>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Where My Work Has Made a Difference
            </h2>
            <BrandsCarousel brands={brands} />
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default About;
