import React from 'react';
import SingleColumnSection from 'components/singleColumnSection/singleColumnSection';

const About: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <SingleColumnSection
        fullScreen={true}
        content={
          <>
          <div>
            <h2 className="text-3xl font-bold mb-4">About me</h2>
            <p>Hi, I'm Jose Manuel Palau Alegría, a passionate Lead Frontend Developer with a strong background in multimedia engineering. With expertise in React, Angular, and modern web technologies, I specialize in crafting dynamic, user-centric web experiences. My journey spans multiple industries, showcasing my ability to adapt, innovate, and lead technological transformations.
            </p>
          </div>
          <div className='mt-4'>
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>

          </div>
          </>
          }
      />
    </div>
  );
};

export default About;