import React from 'react';
import ReactMarkdown from 'react-markdown';
import TwoColumnSection from 'components/twoColumnSection/twoColumnSection';
import { FiDownload } from 'react-icons/fi';
import { CV_FILENAME, CV_PATH } from 'config/site';
import './resume.css';

interface ResumeProps {
  leftColumn: string;
  rightColumn: string;
}

const Resume: React.FC<ResumeProps> = ({ leftColumn, rightColumn }) => {
  if (!leftColumn || !rightColumn) return null;

  return (
    <section id="resume" className="w-full py-16 bg-dots-pattern bg-brand scroll-mt-16">
      <div className="mx-auto max-w-4xl px-4">
        <TwoColumnSection
          className="resume"
          title={
            <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
              <div>
                <p className="text-xs font-mono text-indigo-600 tracking-[0.2em] uppercase mb-2">
                  02 — Resume
                </p>
                <h2>My Resume</h2>
              </div>
              <a
                href={CV_PATH}
                download={CV_FILENAME}
                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-indigo-300 text-indigo-700 hover:bg-indigo-50 transition-colors flex-shrink-0 mt-1"
              >
                <FiDownload size={14} />
                Download CV
              </a>
            </div>
          }
          leftContent={<ReactMarkdown>{leftColumn}</ReactMarkdown>}
          rightContent={<ReactMarkdown>{rightColumn}</ReactMarkdown>}
        />
      </div>
    </section>
  );
};

export default Resume;
