export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface Project {
  id: number;
  title: string;
  desc: string;
  tech: string[];
  link: string;
  sourceUrl: string;
}

export interface Socials {
  github: string;
  linkedin: string;
  email: string;
  tel: string;
}

export interface TechnicalSkills {
  frontend: string[];
  backend: string[];
  tools: string[];
  other: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  description: string;
  about: string;
  avatarUrl: string;
  skills: string[];
  technicalSkills: TechnicalSkills;
  experience: Experience[];
  education: Education[];
  socials: Socials;
  projects: Project[];
}
