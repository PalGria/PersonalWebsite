import { EntrySkeletonType } from "contentful";

export interface ContentfulMetadata {
  tags: [];
  concepts: [];
}

export interface ContentfulSys {
  space: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  };
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: {
    sys: {
      id: string;
      type: string;
      linkType: string;
    };
  };
  publishedVersion: number;
  revision: number;
  contentType: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  };
  locale: string;
}
export interface TechStackItem {
  metadata: ContentfulMetadata;
  sys: ContentfulSys;
  fields: {
    name: string;
    percentage: number;
  };
}
export interface BrandItem {
  metadata: ContentfulMetadata;
  sys: ContentfulSys;
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface WebEntry extends EntrySkeletonType {
  metadata: ContentfulMetadata;
  sys: ContentfulSys;
  fields: WebEntryFields;
}

export interface WebEntryFields {
  
    title: string;
    subtitle: string;
    aboutMe: string;
    techStack: TechStackItem[];
    brands: BrandItem[];
    resumeLeftColumn: string;
    resumeRightColumn: string;
    heroBackgroundColor : string;
    twitter : string;
    linkedIn : string;
    github : string;
}