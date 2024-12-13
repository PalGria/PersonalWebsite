import Footer from 'components/footer/footer';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex flex-col bg-dots-pattern' style={{ backgroundColor: '#140453' }}>
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 bg-white text-gray-800 p-3 rounded-full hover:bg-gray-500 transition-colors duration-300"
      >
        &larr; Back
      </button>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;