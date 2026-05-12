import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft, FiCalendar } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import Layout from 'components/layout/layout';
import ReadingProgress from 'components/readingProgress/ReadingProgress';
import { BlogPostFields } from 'types/contentful';
import { getBlogPostBySlug } from 'services/contentfulService';
import './index.css';

const ensureHttps = (url: string) => (url.startsWith('//') ? `https:${url}` : url);

const BlogPostSkeleton: React.FC = () => (
  <div className="pt-24 pb-16 px-4">
    <article className="mx-auto max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden">
      <div className="w-full h-56 animate-pulse bg-gray-200 dark:bg-gray-700" />
      <div className="p-8 md:p-12 space-y-4">
        <div className="h-8 w-3/4 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg" />
        <div className="h-4 w-28 animate-pulse bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="space-y-3 pt-4">
          {[1, 0.95, 0.85, 0.9, 0.75, 0.8, 0.7].map((w, i) => (
            <div
              key={i}
              className="h-4 animate-pulse bg-gray-200 dark:bg-gray-700 rounded"
              style={{ width: `${w * 100}%` }}
            />
          ))}
        </div>
      </div>
    </article>
  </div>
);

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost]       = useState<BlogPostFields | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate              = useNavigate();

  useEffect(() => {
    if (!slug) return;
    getBlogPostBySlug(slug).then(postData => {
      if (postData) {
        setPost(postData);
      } else {
        navigate('/404');
      }
      setLoading(false);
    });
  }, [slug, navigate]);

  const imageUrl = post?.image?.fields.file.url
    ? ensureHttps(post.image.fields.file.url)
    : undefined;

  const formattedDate = post
    ? new Date(post.date).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric',
      })
    : '';

  return (
    <Layout>
      {post && (
        <Helmet>
          <title>{post.title} | JM Palau Alegria</title>
          <meta name="description"         content={post.excerpt} />
          <meta property="og:title"        content={post.title}   />
          <meta property="og:description"  content={post.excerpt} />
          {imageUrl && <meta property="og:image" content={imageUrl} />}
        </Helmet>
      )}

      <ReadingProgress />

      {loading ? (
        <BlogPostSkeleton />
      ) : post ? (
        <div className="pt-24 pb-20 px-4">
          <article className="mx-auto max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden">
            {/* Cover image */}
            {imageUrl && (
              <img
                src={imageUrl}
                alt={post.image?.fields.title ?? post.title}
                className="w-full h-64 object-cover"
              />
            )}

            <div className="p-8 md:p-12">
              {/* Back link */}
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8 group"
              >
                <FiArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                All posts
              </button>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3">
                {post.title}
              </h1>

              {/* Date */}
              <div className="flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500 mb-10">
                <FiCalendar size={13} />
                {formattedDate}
              </div>

              {/* Prose content */}
              <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-code:before:content-none prose-code:after:content-none prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </Layout>
  );
};

export default BlogPost;
