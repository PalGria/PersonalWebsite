import React from 'react';
import ReactMarkdown from 'react-markdown';
import TwoColumnSection from 'components/twoColumnSection/twoColumnSection';
import './resume.css';
const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);
interface ResumeProps {
  backgroundColor?: string;
}

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

const Resume: React.FC<ResumeProps> = ({backgroundColor}) => {
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
          leftContent={<ReactMarkdown>{leftContent}</ReactMarkdown>}
          rightContent={<ReactMarkdown>{rightContent}</ReactMarkdown>}
          bgColor='#f9f9f9'
        />
      </div>
    </div>
  );
};

export default Resume;