import type {
    Project,
    ProjectSection,
    ProjectMetric,
    ProjectLink,
    TimelineItem,
    TechStack
  } from './index';
  
  export interface ProjectCardProps {
    project: Project;
    onClick: (projectId: string) => void;
    index: number;
  }
  
  export interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
  }
  
  export interface ProjectSectionProps {
    section: ProjectSection;
    sectionKey: string;
  }
  
  export interface ProjectGridProps {
    projects: Project[];
    onProjectClick: (projectId: string) => void;
  }
  
  export interface ProjectFilterProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
  }
  
  // Re-export from main types
  export type {
    Project,
    ProjectSection,
    ProjectMetric,
    ProjectLink,
    TimelineItem,
    TechStack
  };