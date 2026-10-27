import type { RouteRecord } from 'vite-react-ssg';
import Layout from 'components/layout/layout';
import ErrorPage from 'pages/error/ErrorPage';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/components/layout/layout.tsx',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        lazy: () => import('pages/home'),
        entry: 'src/pages/home/index.tsx',
      },
      {
        path: 'blog/:slug',
        lazy: () => import('pages/blogPost'),
        entry: 'src/pages/blogPost/index.tsx',
        getStaticPaths: async () => {
          if (import.meta.env.SSR) {
            const { getBlogPosts } = await import('services/contentfulService');
            const posts = await getBlogPosts();
            return posts.map(post => `blog/${post.slug}`);
          }
          return [];
        },
      },
      {
        // Prerendered as /404.html; the web server should serve it for unknown paths.
        path: '404',
        lazy: () => import('pages/404/notFound'),
        entry: 'src/pages/404/notFound.tsx',
      },
      {
        path: '*',
        lazy: () => import('pages/404/notFound'),
        entry: 'src/pages/404/notFound.tsx',
      },
    ],
  },
];
