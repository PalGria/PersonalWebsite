import React from 'react';
import './ProgressBar.css';
import { TechStackItem } from 'types/contentful';


interface ProgressBarProps {
  skills: TechStackItem[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ skills }) => {
  
  return (
    <div className="container">
      {skills.map((skill, index) => (
        <div className="skill-box" key={index}>
          <span className="title">{skill.fields.name}</span>
          <div className="skill-bar">
            <span className={`skill-per `} style={{ width: `${skill.fields.percentage}%` }}>
              <span className="tooltip">{`${skill.fields.percentage}%`}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;