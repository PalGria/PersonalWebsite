import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto text-center">
         <a href="/"><p>&copy; {new Date().getFullYear()} Jose Manuel Palau Alegria</p></a> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;