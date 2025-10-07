import type {
    Skill,
    SkillCategory
  } from './index';
  
  export interface SkillProps {
    skill: Skill;
    animationDelay?: number;
  }
  
  export interface SkillCategoryProps {
    category: SkillCategory;
    animationDelay?: number;
  }
  
  export interface SkillsGridProps {
    skills: SkillCategory[];
  }
  
  export interface SkillBadgeProps {
    name: string;
    level: Skill['level'];
    category: Skill['category'];
    size?: 'sm' | 'md' | 'lg';
  }
  
  export interface SkillFilterProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
  }
  
  // Re-export from main types
  export type {
    Skill,
    SkillCategory
  };