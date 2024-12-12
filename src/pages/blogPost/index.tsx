import React, { useEffect, useState } from 'react';
//import ReactMarkdown from 'react-markdown';
import './index.css';
import SingleColumnSection from 'components/singleColumnSection/singleColumnSection';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogPostFields } from 'types/contentful';
import { getBlogPostBySlug } from 'services/contentfulService';
import Blog from 'components/blog/blog';
import Layout from 'components/layout/layout';
interface BlogPostProps {
  backgroundColor?: string;
  leftColumn?: string;
  rightColumn?: string;
}


const BlogPost: React.FC<BlogPostProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostFields | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        const postData = await getBlogPostBySlug(slug);
        if (postData) {
          setPost(postData);
        } else {
          navigate('/404');
        }
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return null;
  }

  
  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Layout>
    <div className='blog-post pt-8 bg-dots-pattern' style={{ backgroundColor: '#140453' }}>
      <div className="mx-auto max-w-4xl px-4 blog-post">
        <SingleColumnSection
          content={
            <div className="mx-auto max-w-4xl px-4 ">
              <h1 className="text-4xl font-bold">{post.title}</h1>
              <p className="text-gray-500 mb-4 font-serif text-xs">{formattedDate}</p>
              <img src={post.image.fields.file.url} alt={post.image.fields.title} className="w-full h-48 object-cover mb-4" />
              <p className="text-gray-700">{post.content}</p>
            </div>
          }
        />
        <Blog />
      </div>
    </div>
    </Layout>
  );
};

export default BlogPost;