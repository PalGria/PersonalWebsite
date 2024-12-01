import React from 'react';

interface TwoColumnSectionProps {
  title: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({ title, leftContent, rightContent }) => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>{leftContent}</div>
        <div>{rightContent}</div>
      </div>
    </div>
  );
};

export default TwoColumnSection;