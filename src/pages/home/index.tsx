import React, { useEffect, useState } from 'react';
import Hero, { HeroData } from '../../components/hero/hero';
import About, { AboutData } from './components/about/about';
import Resume from './components/resume/resume';
import { createClient } from 'contentful';
import { WebEntry } from 'types/contentful';
import { WebEntryFields } from 'types/contentful';

const Home: React.FC = () => {

  const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
  const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

  const client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });
  const [data, setData] = useState<WebEntryFields | null>(null);
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    client.getEntry<WebEntry>("60c5ZyxrvbRsBjpPwJ8kRQ")
      .then((response) => {
        setData(response.fields as WebEntryFields);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (data) {
      setHeroData({
        title: data.title,
        subtitle: data.subtitle,
        backgroundColor: data.heroBackgroundColor,
        twitterLink: data.twitter,
        linkedinLink: data.linkedIn,
        githubLink: data.github,
      });
      setAboutData({
        aboutMe: data.aboutMe,
        brands: data.brands,
        techStack: data.techStack,
      });
    }
  }, [data]);
  return (
    <>
      <Hero {...heroData} />
      <About aboutData={aboutData}/>
      <Resume backgroundColor='#140453' />
    </>
  );
};

export default Home;

