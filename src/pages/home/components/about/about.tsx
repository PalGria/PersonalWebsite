import React from 'react';
import SingleColumnSection from 'components/singleColumnSection/singleColumnSection';
import ProgressBar from 'components/progressBar/progressBar';
import BrandsCarousel from 'components/brandsCarousel/brandsCarousel';
import './about.css';
import { BrandItem, TechStackItem } from 'types/contentful';

const skills = [
  { title: 'HTML', percentage: 50, className: 'html' },
  { title: 'CSS', percentage: 70, className: 'css' },
  { title: 'JavaScript', percentage: 50, className: 'javascript' },
  { title: 'NodeJS', percentage: 30, className: 'nodejs' },
];
export interface AboutData {
  aboutMe: string;
  brands: BrandItem[];
  techStack: TechStackItem[];
}
const About: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4">
        <SingleColumnSection
          fullScreen={false}
          content={
            <>
              <div>
                <h2 className="text-3xl font-bold mb-6">About me</h2>
                <p className='text-justify'>Hi, I'm Jose Manuel Palau Alegría, a passionate Lead Frontend Developer with a strong background in multimedia engineering. With expertise in React, Angular, and modern web technologies, I specialize in crafting dynamic, user-centric web experiences. My journey spans multiple industries, showcasing my ability to adapt, innovate, and lead technological transformations.
                </p>
              </div>
              <div className='mt-12'>
                <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
                <ProgressBar skills={skills} />
              </div>
              <div className='mt-12'>
                <h2 className="text-3xl font-bold mb-8">Where My Work Has Made a Difference</h2>
                <BrandsCarousel />
              </div>
            </>
          }
        />
      </div>

    </>
  );
};

export default About;