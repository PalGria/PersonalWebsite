import React from 'react';
import { Head } from 'vite-react-ssg';
import { SITE_DESCRIPTION, SITE_TITLE, absoluteUrl } from 'config/site';

interface SeoProps {
  title?: string;
  description?: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  children?: React.ReactNode;
}

const Seo: React.FC<SeoProps> = ({
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
  path,
  image = '/og-image.png',
  type = 'website',
  noIndex = false,
  children,
}) => {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith('http') ? image : absoluteUrl(image);

  return (
    <Head>
      {/* Emitted by Helmet ahead of the index.html head, keeping it within the first 1024 bytes */}
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {children}
    </Head>
  );
};

export default Seo;
