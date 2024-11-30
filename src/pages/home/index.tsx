import React from 'react';
import Hero from '../../components/hero/hero';

const Home: React.FC = () => {
  const heroData = {
    title: "Hi, I'm Jose",
    subtitle: "Multimedia Engineer and Web Developer",
    buttonText: "Learn More",
    buttonLink: "#services",
    //image: "https://via.placeholder.com/1920x1080.png?text=Hero+Image",
    //video: "https://www.w3schools.com/html/mov_bbb.mp4",
    backgroundColor: "#4a90e2",
    twitterLink: 'https://twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/jmpa/',
    githubLink: 'https://github.com/PalGria',
  };

  return (
    <>
      <Hero {...heroData} />
      <div className="text-center text-2xl">Home Page</div>
    </>
  );
};

export default Home;