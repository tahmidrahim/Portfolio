export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  featured: boolean;
  summary: string[];
  techChips: string[];
  problem?: string;
  built: string[];
  technicalDecisions?: string[];
  results?: string;
  clientQuote?: string;
  thumbnail: string;
  screenshots: {
    src: string;
    alt: string;
    caption: string;
    isConcept?: boolean;
  }[];
  liveDemoUrl?: string;
  repoUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  guarantee: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
