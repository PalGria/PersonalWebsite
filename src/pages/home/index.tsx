import React, { useEffect, useState } from 'react';
import Hero from 'components/hero/hero';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Blog from '../../components/blog/blog';
import Projects from 'components/projects/Projects';
import Contact from 'components/contact/Contact';
import Navbar from 'components/navbar/Navbar';
import Footer from 'components/footer/footer';
import { WebEntryFields } from 'types/contentful';
import { getEntry } from 'services/contentfulService';

const LoadingSkeleton: React.FC = () => (
  <div className="min-h-screen">
    <div className="w-full h-screen bg-dots-pattern flex flex-col items-center justify-center gap-4" style={{ backgroundColor: '#140453' }}>
      <div className="h-12 w-72 animate-pulse bg-white/20 rounded-lg" />
      <div className="h-6 w-56 animate-pulse bg-white/20 rounded-lg" />
      <div className="flex gap-4 mt-2">
        {[0, 1, 2].map(i => (
          <div key={i} className="h-8 w-8 animate-pulse bg-white/20 rounded-full" />
        ))}
      </div>
    </div>
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="h-8 w-32 animate-pulse bg-gray-200 dark:bg-gray-700 rounded mb-6" />
      <div className="space-y-3">
        {[1, 0.9, 0.7].map((w, i) => (
          <div key={i} className="h-4 animate-pulse bg-gray-200 dark:bg-gray-700 rounded" style={{ width: `${w * 100}%` }} />
        ))}
      </div>
    </div>
  </div>
);

const Home: React.FC = () => {
  const [data, setData] = useState<WebEntryFields | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEntry('60c5ZyxrvbRsBjpPwJ8kRQ').then(entry => {
      setData(entry);
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingSkeleton />;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-400">
          Failed to load content. Please refresh the page.
        </p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        backgroundColor={data.heroBackgroundColor}
        twitterLink={data.twitter}
        linkedinLink={data.linkedIn}
        githubLink={data.github}
      />
      <About
        aboutData={{
          aboutMe: data.aboutMe,
          brands: data.brands,
          techStack: data.techStack,
        }}
      />
      <Resume
        backgroundColor="#140453"
        leftColumn={data.resumeLeftColumn}
        rightColumn={data.resumeRightColumn}
      />
      <Projects />
      <Blog />
      <Contact email={data.mail} linkedIn={data.linkedIn} github={data.github} />
      <Footer />
    </>
  );
};

export default Home;
