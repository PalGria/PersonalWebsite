import Layout from 'components/layout/layout';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
        <button
          onClick={() => navigate('/')}
          className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          &larr; Back
        </button>
      </div>
    </Layout>
  );
};

export default NotFound;