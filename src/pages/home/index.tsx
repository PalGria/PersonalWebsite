import React from 'react';
import Hero from '../../components/hero/hero';
import About from './components/about/about';
import Resume from './components/resume/resume';
const Home: React.FC = () => {
  const heroData = {
    title: "Hi, I'm Jose",
    subtitle: "Multimedia Engineer and Web Developer",
    buttonText: "Learn More",
    buttonLink: "#services",
    //image: "https://via.placeholder.com/1920x1080.png?text=Hero+Image",
    //video: "https://www.w3schools.com/html/mov_bbb.mp4",
    backgroundColor: "#140453",
    twitterLink: 'https://twitter.com/palau_alegria',
    linkedinLink: 'https://www.linkedin.com/in/jmpa/',
    githubLink: 'https://github.com/PalGria',
  };

  return (
    <>
      <Hero {...heroData} />
      <About />      
      <Resume backgroundColor='#140453' />      
    </>
  );
};

export default Home;