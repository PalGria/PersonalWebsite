// Plain, JSON-serialisable shapes. Contentful entries are mapped into these at
// build time so loader data can be embedded in the prerendered pages.

export interface ContentImage {
  url: string;
  title: string;
  width?: number;
  height?: number;
}

export interface Skill {
  name: string;
}

export interface Brand {
  title: string;
  logo: ContentImage;
}

export interface HomeContent {
  title: string;
  subtitle: string;
  aboutMe: string;
  techStack: Skill[];
  brands: Brand[];
  resumeLeftColumn: string;
  resumeRightColumn: string;
  heroBackgroundColor?: string;
  twitter?: string;
  linkedIn?: string;
  github?: string;
  mail?: string;
}

export interface BlogPostSummary {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image?: ContentImage;
}

export interface BlogPost extends BlogPostSummary {
  content: string;
}

export interface Project {
  projectTitle: string;
  projectDescriptionShort: string;
  projectDescriptionLong: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}
