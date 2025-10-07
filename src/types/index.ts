// Base types
export interface BaseEntity {
    id: string;
    title: string;
    description: string;
  }
  
  // Project related types
  export interface ProjectMetric {
    value: string;
    label: string;
  }
  
  export interface ProjectLink {
    text: string;
    url: string;
    primary: boolean;
  }
  
  export interface TimelineItem {
    title: string;
    content: string;
  }
  
  export interface TechStack {
    [category: string]: string[];
  }
  
  export interface ProjectSection {
    icon: string;
    title: string;
    content: string;
    timeline?: TimelineItem[];
    techStack?: TechStack;
    metrics?: ProjectMetric[];
  }
  
  export interface Project extends BaseEntity {
    icon: string;
    subtitle: string;
    technologies: string[];
    sections: {
      problem: ProjectSection;
      approach: ProjectSection;
      implementation: ProjectSection;
      results: ProjectSection;
    };
    links: ProjectLink[];
    featured?: boolean;
  }
  
  // Skills types
  export interface Skill {
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    category: 'Programming' | 'ML/AI' | 'Data' | 'Tools' | 'Cloud';
  }
  
  export interface SkillCategory {
    category: string;
    skills: Skill[];
  }
  
  // Personal info types
  export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
  }
  
  export interface PersonalInfo {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    email: string;
    location: string;
    socialLinks: SocialLink[];
    resume: string;
  }
  
  // Component props types
  export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    href?: string;
    className?: string;
  }
  
  export interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    onClick?: () => void;
  }
  
  export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
  }
  
  // Animation types
  export interface AnimationConfig {
    duration: number;
    delay?: number;
    easing?: string;
  }
  
  // Scroll progress types
  export interface ScrollProgress {
    progress: number;
    direction: 'up' | 'down';
  }