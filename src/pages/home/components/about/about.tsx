import React from 'react';
import ReactMarkdown from 'react-markdown';
import SingleColumnSection from 'components/singleColumnSection/singleColumnSection';
import ProgressBar from 'components/progressBar/progressBar';
import BrandsCarousel from 'components/brandsCarousel/brandsCarousel';
import TwoColumnSection from 'components/twoColumnSection/twoColumnSection';
import './about.css';

const skills = [
  { title: 'HTML', percentage: 50, className: 'html' },
  { title: 'CSS', percentage: 70, className: 'css' },
  { title: 'JavaScript', percentage: 50, className: 'javascript' },
  { title: 'NodeJS', percentage: 30, className: 'nodejs' },
];
const leftContent = `

## **Profile**
- - - 
Multimedia Engineer specialized in web development and services, with expertise in modern technologies like **React**, **Angular**, and **Node.js**. Proficient in **modular design**, **system migrations**, and creating innovative solutions to optimize performance and user experience.


## **Education**
---
### **University of Alicante**
**Bachelor’s Degree in Multimedia Engineering**  
2015 - 2019  


## **Core Skills**
---
- **Frontend Development**: 
  - React
  - Angular
  - Gatsby
  - Atomic Design
  - SPAs  
- **Backend & CMS**: 
  - Node.js
  - Headless CMS (Contentful)
  - Dialogflow  
- **Software Practices**: 
  - Modular coding
  - cross-team collaboration
  - Agile methodologies  
- **Key Tools**: 
  - Git
  - Jira
  - Docker
  - CI/CD pipelines  
- **Languages**:  
  - Spanish (Native)  
  - English (Full Professional, Cambridge C1)

`;

const rightContent = `
## **Professional Experience**

---

### **NEWE**
**Senior Frontend Developer**  
*March 2023 – July 2024 (1 year 5 months)* | Alicante, Spain  

- Spearheaded technological transformation in the retail sector with a focus on **React** and **Atomic Design principles**.  
- Refactored the main project for improved scalability and developed new features in collaboration with cross-functional teams.  
- Contributed to **decision-making processes** to enhance workflow efficiency and system performance.  


### **MiFinity**
**Senior Frontend Developer**  
*May 2021 – November 2022 (1 year 7 months)* | Dublin, Ireland  

- Successfully implemented a **headless CMS** using **Contentful**, streamlining content management and updates across applications.  
- Led the development of critical features for a **Single-Page Application (SPA)** built with **React** and **Gatsby**.  
- Authored comprehensive documentation for new features, ensuring clarity and ease of use.  
- Created **modular and reusable code**, improving system flexibility and maintainability.  
- Worked collaboratively with developers, designers, and business analysts to deliver high-quality solutions.  


### **Accenture Spain**
**Frontend Developer**  
*February 2019 – May 2021 (2 years 4 months)* | Madrid, Spain  

- Collaborated with three major banks in Spain, delivering exceptional web experiences with **Angular.js**, **Angular 2/4**, and **React**.  
- Led the migration from **ASP.net** and **Visual Basic** to an **Angular-based architecture**, enhancing performance and user satisfaction.  
- Partnered with multidisciplinary teams to meet project objectives and exceed stakeholder expectations.  


### **Paroli**
**Full-stack Developer**  
*April 2018 – September 2018 (6 months)* | Murcia, Spain  

- Developed bots using **Microsoft Bot Framework** and **Dialogflow**, integrating them with custom applications.  
- Designed and implemented full-stack solutions using **Angular** and **Node.js**, improving application functionality and responsiveness.  
`;

const About: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <SingleColumnSection
        fullScreen={false}
        content={
          <>
            <div>
              <h2 className="text-3xl font-bold mb-6">About me</h2>
              <p className='text-justify'>Hi, I'm Jose Manuel Palau Alegría, a passionate Lead Frontend Developer with a strong background in multimedia engineering. With expertise in React, Angular, and modern web technologies, I specialize in crafting dynamic, user-centric web experiences. My journey spans multiple industries, showcasing my ability to adapt, innovate, and lead technological transformations.
              </p>
            </div>
            <div className='mt-12'>
              <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
              <ProgressBar skills={skills} />
            </div>
            <div className='mt-12'>
              <h2 className="text-3xl font-bold mb-8">Where My Work Has Made a Difference</h2>
              <BrandsCarousel />
            </div>
          </>
        }
      />
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
        className="resume"
        leftContent={<ReactMarkdown>{leftContent}</ReactMarkdown>}
        rightContent={<ReactMarkdown>{rightContent}</ReactMarkdown>}

      />
    </div>
  );
};

export default About;