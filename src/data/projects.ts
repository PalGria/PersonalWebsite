export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Project Title",
    description: "Describe what this project does, the problem it solves, and its impact. E.g. \"Built a real-time dashboard serving 50k daily users, reducing customer support tickets by 30%.\"",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project-repo",
  },
  {
    title: "Project Title",
    description: "Describe what this project does, the problem it solves, and its impact. Quantified results stand out to European hiring managers.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project-repo",
  },
  {
    title: "Project Title",
    description: "Describe what this project does, the problem it solves, and its impact. Focus on your specific contribution and the technologies you drove.",
    tech: ["React", "Redux", "AWS", "Jest"],
    githubUrl: "https://github.com/yourusername/project-repo",
  },
];
