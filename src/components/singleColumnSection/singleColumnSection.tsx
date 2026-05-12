import React from 'react';

interface SingleColumnSectionProps {
  title?: string;
  content: React.ReactNode;
  fullScreen?: boolean;
  className?: string;
}

const SingleColumnSection: React.FC<SingleColumnSectionProps> = ({ title, content, fullScreen, className }) => {
  return (
    <div className={`py-12 px-4 ${fullScreen ? 'w-full h-screen' : ''} ${className ?? ''}`}>
      {title ? <h2 className="text-3xl font-bold mb-6">{title}</h2> : null}
      <div>{content}</div>
    </div>
  );
};

export default SingleColumnSection;
