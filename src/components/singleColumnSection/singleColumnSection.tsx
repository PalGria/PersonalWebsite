import React from 'react';

interface SingleColumnSectionProps {
  title?: string;
  content: React.ReactNode;
  fullScreen?: boolean;
  className?: string;
}

const SingleColumnSection: React.FC<SingleColumnSectionProps> = ({ title, content, fullScreen, className }) => {
  return (
    <div className={`py-8 px-4 ${fullScreen ? 'w-full h-screen' : ''} ${className? className : ''}`}>
      { title ? <h2 className="text-3xl font-bold mb-4">{title}</h2> : null}
      <div>{content}</div>
    </div>
  );
};

export default SingleColumnSection;