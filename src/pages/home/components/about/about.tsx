import React from 'react';
import SingleColumnSection from 'components/singleColumnSection/singleColumnSection';
import ProgressBar from 'components/progressBar/progressBar';
import BrandsCarousel from 'components/brandsCarousel/brandsCarousel';
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
const About: React.FC <AboutProps>= ({ aboutData }) => {
  if (!aboutData) {
    return null;
  }
  return (
    <>
      <div className="mx-auto max-w-4xl px-4">
        <SingleColumnSection
          fullScreen={false}
          content={
            <>
              <div>
                <h2 className="text-3xl font-bold mb-6">About me</h2>
                <p className='text-justify'>
                  {aboutData.aboutMe}
                </p>
              </div>
              <div className='mt-12'>
                <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
                <ProgressBar skills={aboutData.techStack} />
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