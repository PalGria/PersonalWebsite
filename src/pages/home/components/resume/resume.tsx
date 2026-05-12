import React from 'react';
import ReactMarkdown from 'react-markdown';
import TwoColumnSection from 'components/twoColumnSection/twoColumnSection';
import { FiDownload } from 'react-icons/fi';
import './resume.css';

interface ResumeProps {
  backgroundColor?: string;
  leftColumn?: string;
  rightColumn?: string;
}

const Resume: React.FC<ResumeProps> = ({ backgroundColor, leftColumn, rightColumn }) => {
  if (!leftColumn || !rightColumn) return null;

  return (
    <div
      id="resume"
      className="w-full py-16 bg-dots-pattern"
      style={{ backgroundColor: backgroundColor || '#140453' }}
    >
      <div className="mx-auto max-w-4xl px-4 resume">
        <TwoColumnSection
          title={
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-2">
                  02 — Resume
                </p>
                <h1>My Resume</h1>
              </div>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors flex-shrink-0 mt-1"
              >
                <FiDownload size={14} />
                Download CV
              </a>
            </div>
          }
          className="mb-4"
          leftContent={<ReactMarkdown>{leftColumn}</ReactMarkdown>}
          rightContent={<ReactMarkdown>{rightColumn}</ReactMarkdown>}
          bgColor="#f9f9f9"
        />
      </div>
    </div>
  );
};

export default Resume;
