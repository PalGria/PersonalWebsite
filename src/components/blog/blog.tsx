import React, { useEffect, useState } from 'react';
import { getBlogPosts } from 'services/contentfulService';
import { BlogPostFields } from 'types/contentful';


const Blog: React.FC = ( ) => {
  const [blogData, setBlogData] = useState<BlogPostFields[] | null>(null);
  const fetchBlogData = async () => {
    const blogData = await getBlogPosts();
    setBlogData(blogData);
  };
  
  useEffect(() => {
    fetchBlogData();
  }, []);
  
  if (!blogData) {
    return null;
  }
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest entries from my Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogData.map(post => (
          <a href={`/blog/${post.slug}`} key={post.slug}>
          <div className="bg-white shadow-md rounded-lg overflow-ellipsis" >
          <img 
              src={post.image ? post.image.fields.file.url : 'https://via.placeholder.com/300'} 
              alt={post.image ? post.image.fields.title : 'Placeholder Image'} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-3">
              <h2 className="text-md font-semibold mb-4 h-10">{post.title}</h2>
              <p className="text-gray-700 h-20">
                {post.excerpt.length > 50 ? `${post.excerpt.substring(0, 80)}...` : post.excerpt}
              </p>
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;