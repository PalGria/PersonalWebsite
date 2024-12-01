import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './hero.css';
interface HeroProps {
  title: string;
  subtitle: string;
  image?: string;
  video?: string;
  backgroundColor?: string;
  twitterLink?: string;
  linkedinLink?: string;
  githubLink?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image, video, backgroundColor, twitterLink, linkedinLink, githubLink }) => {
  return (
    <div className="relative w-full h-screen" style={{ backgroundColor: backgroundColor || 'gray' }}>
      {image ? (
        <img src={image} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
      ) : video ? (
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : null}
      <div className="absolute inset-0 bg-dots-pattern"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
        <h1 className="text-5xl font-bold mb-4 red-color">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <div className="flex space-x-4">
         {twitterLink ? <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaTwitter size={30} />
          </a> : ''}
         {linkedinLink ? <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
            <FaLinkedin size={30} />
          </a> : ''}
          {githubLink ? <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
            <FaGithub size={30} />
          </a> : ''}
        </div>

      </div>
    </div>
  );
};

export default Hero;