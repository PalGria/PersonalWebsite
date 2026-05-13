// contentfulService.ts
import { createClient } from 'contentful';
import { BlogPostCall, BlogPostFields, WebEntry, ProjectCall, ProjectFields } from 'types/contentful';
import { WebEntryFields } from 'types/contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export const getEntry = async (entryId: string): Promise<WebEntryFields | null> => {
  try {
    const response = await client.getEntry<WebEntry>(entryId, { include: 2 });
    const f = response.fields as unknown as Record<string, unknown>;
    return {
      title:               f.title               as string,
      subtitle:            f.subtitle             as string,
      aboutMe:             f.aboutMe              as string,
      techStack:           (f.techStack           as WebEntryFields['techStack'])  ?? [],
      brands:              (f.brands              as WebEntryFields['brands'])     ?? [],
      resumeLeftColumn:    f.resumeLeftColumn     as string,
      resumeRightColumn:   f.resumeRightColumn    as string,
      heroBackgroundColor: f.heroBackgroundColor  as string,
      twitter:             f.twitter              as string,
      linkedIn:            f.linkedIn             as string,
      github:              f.github               as string,
      mail:                f.mail                 as string,
    } satisfies WebEntryFields;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getBlogPosts = async (): Promise<BlogPostFields[] | null> => {
  try {
    const response = await client.getEntries<BlogPostCall>({ content_type: 'blogPost' });
    const blogPosts = response.items.map(item => item.fields) as unknown as BlogPostFields[];
    return blogPosts;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getBlogPostBySlug = async (slug: string): Promise<BlogPostFields | null> => {
  try {
    const response = await client.getEntries<BlogPostCall>({ content_type: 'blogPost', 'fields.slug': slug });
    const blogPost = response.items[0]?.fields as unknown as BlogPostFields;
    return blogPost;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getProjects = async (): Promise<ProjectFields[] | null> => {
  try {
    const response = await client.getEntries({ content_type: 'project' });
    return response.items.map(item => {
      const f = item.fields as Record<string, unknown>;
      return {
        projectTitle:            f.projectTitle            as string,
        projectDescriptionShort: f.projectDescriptionShort as string,
        projectDescriptionLong:  f.projectDescriptionLong  as string,
        technologies:            (f.technologies as string[]) ?? [],
        liveLink:                f.liveLink                as string,
        githubLink:              f.githubLink              as string,
      } satisfies ProjectFields;
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}