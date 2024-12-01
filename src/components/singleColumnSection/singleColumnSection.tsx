import React from 'react';

interface SingleColumnSectionProps {
  title?: string;
  content: React.ReactNode;
  fullScreen?: boolean;
}

const SingleColumnSection: React.FC<SingleColumnSectionProps> = ({ title, content, fullScreen }) => {
  return (
    <div className={`py-8 px-4 ${fullScreen ? 'w-full h-screen' : ''}`}>
      { title ? <h2 className="text-3xl font-bold mb-4">{title}</h2> : null}
      <div>{content}</div>
    </div>
  );
};

export default SingleColumnSection;