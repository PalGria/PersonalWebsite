import React from 'react';
import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { FiArrowLeft, FiCalendar } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import ReadingProgress from 'components/readingProgress/ReadingProgress';
import Seo from 'components/seo/Seo';
import { Component as NotFound } from 'pages/404/notFound';
import { BlogPost as BlogPostData } from 'types/content';
import { SITE_NAME } from 'config/site';

// Runs at build time for every slug returned by getStaticPaths (see routes.tsx).
export async function loader({ params }: LoaderFunctionArgs): Promise<BlogPostData | null> {
  if (import.meta.env.SSR && params.slug) {
    const { getBlogPostBySlug } = await import('services/contentfulService');
    return getBlogPostBySlug(params.slug);
  }
  return null;
}

export const Component: React.FC = () => {
  const post = useLoaderData() as BlogPostData | null;

  if (!post) return <NotFound />;

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  });

  return (
    <div className="min-h-screen bg-dots-pattern bg-brand">
      <Seo
        title={`${post.title} | ${SITE_NAME}`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        // Social crawlers (LinkedIn, Facebook) don't reliably accept WebP
        image={post.image?.url.replace('fm=webp', 'fm=jpg')}
        type="article"
      />

      <ReadingProgress />

      <div className="pt-24 pb-20 px-4">
        <article className="mx-auto max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden">
          {/* Cover image */}
          {post.image && (
            <img
              src={post.image.url}
              alt={post.image.title || post.title}
              width={post.image.width}
              height={post.image.height}
              className="w-full h-64 object-cover"
            />
          )}

          <div className="p-8 md:p-12">
            {/* Back link */}
            <Link
              to={{ pathname: '/', hash: 'blog' }}
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8 group"
            >
              <FiArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              All posts
            </Link>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3">
              {post.title}
            </h1>

            {/* Date */}
            <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 mb-10">
              <FiCalendar size={13} />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>

            {/* Prose content */}
            <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-code:before:content-none prose-code:after:content-none prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
