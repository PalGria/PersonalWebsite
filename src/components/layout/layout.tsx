import React from 'react';
import Footer from 'components/footer/footer';
import Navbar from 'components/navbar/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-dots-pattern" style={{ backgroundColor: '#140453' }}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
