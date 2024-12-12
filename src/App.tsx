import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css'; // Import Tailwind CSS
import Home from './pages/home';
import BlogPost from './pages/blogPost';
import NotFound from 'pages/404/notFound';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;