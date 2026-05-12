import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import ScrollToTop from 'components/scrollToTop/ScrollToTop';

const Home     = lazy(() => import('pages/home'));
const BlogPost = lazy(() => import('pages/blogPost'));
const NotFound = lazy(() => import('pages/404/notFound'));

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-white dark:bg-gray-950" />}>
          <Routes>
            <Route path="/"           element={<Home />}     />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/404"        element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
