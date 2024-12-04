import React from 'react';
import './ProgressBar.css';

interface Skill {
  title: string;
  percentage: number;
  className: string;
}

interface ProgressBarProps {
  skills: Skill[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ skills }) => {


  
  return (
    <div className="container">
      {skills.map((skill, index) => (
        <div className="skill-box" key={index}>
          <span className="title">{skill.title}</span>
          <div className="skill-bar">
            <span className={`skill-per ${skill.className}`} style={{ width: `${skill.percentage}%` }}>
              <span className="tooltip">{`${skill.percentage}%`}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;