import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { BlogPostSummary } from 'types/content';

const MotionLink = motion.create(Link);

interface BlogCardProps {
  post: BlogPostSummary;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <MotionLink
      ref={ref}
      to={`/blog/${post.slug}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="block bg-white dark:bg-gray-800/60 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
    >
      {post.image ? (
        <img
          src={post.image.url}
          alt={post.image.title || post.title}
          width={post.image.width}
          height={post.image.height}
          loading="lazy"
          decoding="async"
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-600" aria-hidden="true" />
      )}
      <div className="p-5">
        <h3 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white line-clamp-2 leading-snug">
          {post.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>
    </MotionLink>
  );
};

interface BlogProps {
  posts: BlogPostSummary[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="blog" className="bg-gray-50 dark:bg-gray-900 py-20 border-t border-gray-100 dark:border-gray-800 scroll-mt-16">
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
        {posts.length === 0 ? (
          <p className="py-16 text-center text-gray-400 dark:text-gray-500">
            No posts yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {posts.map((post, i) => <BlogCard key={post.slug} post={post} index={i} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
