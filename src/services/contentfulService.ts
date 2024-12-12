// contentfulService.ts
import { createClient } from 'contentful';
import { BlogPostCall, BlogPostFields, WebEntry } from 'types/contentful';
import { WebEntryFields } from 'types/contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export const getEntry = async (entryId: string): Promise<WebEntryFields | null> => {
  try {
    const response = await client.getEntry<WebEntry>(entryId);
    return response.fields as WebEntryFields;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getBlogPosts = async (): Promise<BlogPostFields[] | null> => {
  try {
    const response = await client.getEntries<BlogPostCall>({ content_type: 'blogPost' });
    return response.items.map(item => item.fields);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getBlogPostBySlug = async (slug: string): Promise<BlogPostFields | null> => {
  try {
    const response = await client.getEntries<BlogPostCall>({ content_type: 'blogPost', 'fields.slug': slug });
    return response?.items[0]?.fields;
  } catch (error) {
    console.error(error);
    return null;
  }
}