import React from 'react';
import SingleColumnSection from 'components/singleColumnSection/singleColumnSection';
import SkillTags from 'components/skillTags/SkillTags';
import BrandsCarousel from 'components/brandsCarousel/brandsCarousel';
import AnimatedSection from 'components/animatedSection/AnimatedSection';
import './about.css';
import { BrandItem, TechStackItem } from 'types/contentful';

export interface AboutData {
  aboutMe: string;
  brands: BrandItem[];
  techStack: TechStackItem[];
}

interface AboutProps {
  aboutData: AboutData | null;
}

const About: React.FC<AboutProps> = ({ aboutData }) => {
  if (!aboutData) return null;

  return (
    <section id="about" className="bg-white dark:bg-gray-950 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <SingleColumnSection
          fullScreen={false}
          content={
            <>
              <AnimatedSection>
                <div>
                  <p className="text-xs font-mono text-indigo-500 dark:text-indigo-400 tracking-[0.2em] uppercase mb-2">
                    01 — About
                  </p>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About me</h2>
                  <p className="text-justify text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {aboutData.aboutMe}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1} className="mt-16">
                <p className="text-xs font-mono text-indigo-500 dark:text-indigo-400 tracking-[0.2em] uppercase mb-2">
                  Tech Stack
                </p>
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Skills</h2>
                <SkillTags skills={aboutData.techStack} />
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="mt-16">
                <p className="text-xs font-mono text-indigo-500 dark:text-indigo-400 tracking-[0.2em] uppercase mb-2">
                  Experience
                </p>
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Where My Work Has Made a Difference
                </h2>
                <BrandsCarousel brands={aboutData.brands} />
              </AnimatedSection>
            </>
          }
        />
      </div>
    </section>
  );
};

export default About;
