import React from 'react';

interface TwoColumnSectionProps {
  title?: string | React.ReactNode;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  className?: string;
  bgColor?: string;
}

const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({ title, leftContent, rightContent, className, bgColor }) => {
  return (
    <div className={`py-12 px-4 ${className ?? ''}`} style={{ backgroundColor: bgColor }}>
      {title && <div className="mb-8">{title}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>{leftContent}</div>
        <div>{rightContent}</div>
      </div>
    </div>
  );
};

export default TwoColumnSection;
