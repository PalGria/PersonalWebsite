// Only imported from route loaders / getStaticPaths behind `import.meta.env.SSR`,
// so the Contentful SDK and access token never reach the client bundle.
import { createClient } from 'contentful';
import { BlogPost, BlogPostSummary, Brand, ContentImage, HomeContent, Project, Skill } from 'types/content';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

type Fields = Record<string, unknown>;

interface AssetFile {
  url?: string;
  contentType?: string;
  details?: { image?: { width: number; height: number } };
}

const fieldsOf = (value: unknown): Fields => (value as { fields?: Fields } | undefined)?.fields ?? {};
const str = (value: unknown): string => (typeof value === 'string' ? value : '');
const optStr = (value: unknown): string | undefined => (typeof value === 'string' && value ? value : undefined);
const list = (value: unknown): unknown[] => (Array.isArray(value) ? value : []);

// Normalises protocol-relative URLs and asks the Contentful Images API for a
// resized WebP (SVGs are passed through untouched).
const toImage = (asset: unknown, maxWidth: number): ContentImage | undefined => {
  const f = fieldsOf(asset);
  const file = f.file as AssetFile | undefined;
  if (!file?.url) return undefined;

  let url = file.url.startsWith('//') ? `https:${file.url}` : file.url;
  if (file.contentType?.startsWith('image/') && file.contentType !== 'image/svg+xml') {
    url += `?w=${maxWidth}&fm=webp&q=80`;
  }

  const dims = file.details?.image;
  const width = dims ? Math.min(maxWidth, dims.width) : undefined;
  const height = dims && width ? Math.round((dims.height * width) / dims.width) : undefined;

  return { url, title: str(f.title), width, height };
};

const toBlogPostSummary = (fields: Fields): BlogPostSummary => ({
  title: str(fields.title),
  slug: str(fields.slug),
  date: str(fields.date),
  excerpt: str(fields.excerpt),
  image: toImage(fields.image, 1200),
});

export const getHomeContent = async (entryId: string): Promise<HomeContent> => {
  const entry = await client.getEntry(entryId, { include: 2 });
  const f = entry.fields as Fields;

  return {
    title: str(f.title),
    subtitle: str(f.subtitle),
    aboutMe: str(f.aboutMe),
    techStack: list(f.techStack)
      .map(item => ({ name: str(fieldsOf(item).name) }))
      .filter((skill): skill is Skill => Boolean(skill.name)),
    brands: list(f.brands)
      .map(asset => ({ title: str(fieldsOf(asset).title), logo: toImage(asset, 560) }))
      .filter((brand): brand is Brand => Boolean(brand.logo)),
    resumeLeftColumn: str(f.resumeLeftColumn),
    resumeRightColumn: str(f.resumeRightColumn),
    heroBackgroundColor: optStr(f.heroBackgroundColor),
    twitter: optStr(f.twitter),
    linkedIn: optStr(f.linkedIn),
    github: optStr(f.github),
    mail: optStr(f.mail),
  };
};

export const getBlogPosts = async (): Promise<BlogPostSummary[]> => {
  const response = await client.getEntries({
    content_type: 'blogPost',
    order: ['-fields.date'],
    select: ['fields.title', 'fields.slug', 'fields.date', 'fields.excerpt', 'fields.image'],
  });
  return response.items.map(item => toBlogPostSummary(item.fields as Fields));
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const response = await client.getEntries({ content_type: 'blogPost', 'fields.slug': slug, limit: 1 });
  const fields = response.items[0]?.fields as Fields | undefined;
  if (!fields) return null;
  return { ...toBlogPostSummary(fields), content: str(fields.content) };
};

export const getProjects = async (): Promise<Project[]> => {
  const response = await client.getEntries({ content_type: 'project' });
  return response.items.map(item => {
    const f = item.fields as Fields;
    return {
      projectTitle: str(f.projectTitle),
      projectDescriptionShort: str(f.projectDescriptionShort),
      projectDescriptionLong: str(f.projectDescriptionLong),
      technologies: list(f.technologies).filter((t): t is string => typeof t === 'string'),
      liveLink: optStr(f.liveLink),
      githubLink: optStr(f.githubLink),
    };
  });
};
