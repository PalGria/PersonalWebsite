import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from 'components/hero/hero';
import Blog from 'components/blog/blog';
import Projects from 'components/projects/Projects';
import Contact from 'components/contact/Contact';
import Seo from 'components/seo/Seo';
import About from './components/about/about';
import Resume from './components/resume/resume';
import { BlogPostSummary, HomeContent, Project } from 'types/content';
import { HOME_ENTRY_ID, SITE_NAME, SITE_TITLE, SITE_URL } from 'config/site';

interface HomeData {
  content: HomeContent;
  projects: Project[];
  posts: BlogPostSummary[];
}

// Runs at build time only; the result is embedded in the prerendered page.
// A failed fetch throws so the build fails instead of deploying a broken site.
export async function loader(): Promise<HomeData | null> {
  if (import.meta.env.SSR) {
    const { getHomeContent, getProjects, getBlogPosts } = await import('services/contentfulService');
    const [content, projects, posts] = await Promise.all([
      getHomeContent(HOME_ENTRY_ID),
      getProjects(),
      getBlogPosts(),
    ]);
    return { content, projects, posts };
  }
  return null;
}

export const Component: React.FC = () => {
  const data = useLoaderData() as HomeData | null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-400">
          Failed to load content. Please refresh the page.
        </p>
      </div>
    );
  }

  const { content, projects, posts } = data;
  const sameAs = [content.linkedIn, content.github, content.twitter].filter(Boolean);
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    jobTitle: 'Senior Frontend Developer',
    ...(SITE_URL && { url: SITE_URL }),
    ...(sameAs.length > 0 && { sameAs }),
    knowsAbout: content.techStack.map(skill => skill.name),
  };

  return (
    // --brand lets the CMS override the brand colour used by `bg-brand`
    <div style={content.heroBackgroundColor ? ({ '--brand': content.heroBackgroundColor } as React.CSSProperties) : undefined}>
      <Seo title={SITE_TITLE} path="/">
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Seo>
      <Hero
        title={content.title}
        subtitle={content.subtitle}
        twitterLink={content.twitter}
        linkedinLink={content.linkedIn}
        githubLink={content.github}
      />
      <About aboutMe={content.aboutMe} brands={content.brands} techStack={content.techStack} />
      <Resume leftColumn={content.resumeLeftColumn} rightColumn={content.resumeRightColumn} />
      <Projects projects={projects} />
      <Blog posts={posts} />
      <Contact email={content.mail} linkedIn={content.linkedIn} github={content.github} />
    </div>
  );
};
