import React, { useEffect, useRef, useState } from 'react';
import { getBlogPosts } from 'services/contentfulService';
import { BlogPostFields } from 'types/contentful';
import { motion, useInView } from 'framer-motion';

const getImageUrl = (url: string) => (url.startsWith('//') ? `https:${url}` : url);

const BlogCardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800/60 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50">
    <div className="w-full h-48 animate-pulse bg-gray-200 dark:bg-gray-700" />
    <div className="p-5 space-y-2.5">
      <div className="h-4 animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-4/5" />
      <div className="h-4 animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-3/5" />
      <div className="h-3 animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full mt-4" />
      <div className="h-3 animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
    </div>
  </div>
);

interface BlogCardProps {
  post: BlogPostFields;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.a
      ref={ref}
      href={`/blog/${post.slug}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="block bg-white dark:bg-gray-800/60 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
    >
      <img
        src={post.image ? getImageUrl(post.image.fields.file.url) : '/placeholder-blog.png'}
        alt={post.image ? post.image.fields.title : post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white line-clamp-2 leading-snug">
          {post.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>
    </motion.a>
  );
};

const Blog: React.FC = () => {
  const [blogData, setBlogData] = useState<BlogPostFields[] | null>(null);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    getBlogPosts().then(data => {
      setBlogData(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="blog" className="bg-gray-50 dark:bg-gray-900 py-20 border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-indigo-500 dark:text-indigo-400 tracking-[0.2em] uppercase mb-2">
            04 — Blog
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Writing</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <BlogCardSkeleton key={i} />)
            : blogData?.map((post, i) => <BlogCard key={post.slug} post={post} index={i} />)
          }
        </div>
      </div>
    </section>
  );
};

export default Blog;
