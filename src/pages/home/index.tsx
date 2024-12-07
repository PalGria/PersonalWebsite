import React, { useEffect, useState } from 'react';
import Hero from '../../components/hero/hero';
import About from './components/about/about';
import Resume from './components/resume/resume';
import { createClient } from 'contentful';

const Home: React.FC = () => {
  
  const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
  const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

  const client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });
  const [data, setData] = useState(null);

  useEffect(() => {
    client.getEntry("60c5ZyxrvbRsBjpPwJ8kRQ")
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch(console.error);
  }, []);
  
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

