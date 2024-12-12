import React from 'react';
import { BlogPostFields } from 'types/contentful';

interface BlogProps {
  blogData?: BlogPostFields[] | null;
}

const Blog: React.FC<BlogProps> = ({ blogData }) => {
  if (!blogData) {
    return null;
  }
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest entries from my Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogData.map(post => (
          <div key={post.slug} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.image.fields.file.url} alt={post.image.fields.title} className="w-full h-48 object-cover" />
            <div className="p-3">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">
                {post.excerpt.length > 50 ? `${post.excerpt.substring(0, 60)}...` : post.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;