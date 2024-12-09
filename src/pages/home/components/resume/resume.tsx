import React from 'react';
import ReactMarkdown from 'react-markdown';
import TwoColumnSection from 'components/twoColumnSection/twoColumnSection';
import './resume.css';
interface ResumeProps {
  backgroundColor?: string;
  leftColumn?: string;
  rightColumn?: string;
}


const Resume: React.FC<ResumeProps> = ({backgroundColor, leftColumn, rightColumn}) => {
  if (!leftColumn || !rightColumn) {
    return null;
  }
  return (
    <div className='w-full pt-8 pb-8 bg-dots-pattern' style={{ backgroundColor: backgroundColor || 'gray' }}>
      <div className="mx-auto max-w-4xl px-4 resume">
        <TwoColumnSection
          title={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h1>My Resume</h1>
              {
                /*
                <button
                onClick={() => window.open('/path/to/resume.pdf', '_blank')}
                className="download-button"
                >
                Download Resume
                </button>
                }
                */
              }
            </div>
          }
          className="mb-4"
          leftContent={<ReactMarkdown>{leftColumn}</ReactMarkdown>}
          rightContent={<ReactMarkdown>{rightColumn}</ReactMarkdown>}
          bgColor='#f9f9f9'
        />
      </div>
    </div>
  );
};

export default Resume;