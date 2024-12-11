import React, { useEffect, useState } from 'react';
import Hero, { HeroData } from '../../components/hero/hero';
import About, { AboutData } from './components/about/about';
import Resume from './components/resume/resume';
import { BlogPostFields, WebEntryFields } from 'types/contentful';
import Blog from './components/blog/blog';
import { getBlogPosts, getEntry } from 'services/contentfulService';

const Home: React.FC = () => {


  const [data, setData] = useState<WebEntryFields | null>(null);
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [blogData, setBlogData] = useState<BlogPostFields[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const entryData = await getEntry("60c5ZyxrvbRsBjpPwJ8kRQ");
      setData(entryData);
    };
    const fetchBlogData = async () => {
      const blogData = await getBlogPosts();
      console.log(blogData);
      setBlogData(blogData);
    };

    fetchData();
    fetchBlogData();
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
      <Resume backgroundColor='#140453' leftColumn={data?.resumeLeftColumn} rightColumn={data?.resumeRightColumn}/>
      <Blog blogData={blogData}/>
    </>
  );
};

export default Home;

