import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: "Programming",
    skills: [ 
      { name: "Python", level: "Expert", category: "Programming" }, 
      { name: "R", level: "Advanced", category: "Programming" }, 
      { name: "SQL", level: "Expert", category: "Programming" }, 
      { name: "JavaScript", level: "Intermediate", category: "Programming" }, 
      { name: "TypeScript", level: "Intermediate", category: "Programming" }, 
      { name: "Java", level: "Intermediate", category: "Programming" } 
    ]
  },

  {
    category: "ML/AI",
    skills: [
      { name: "Scikit-learn", level: "Intermediate", category: "ML/AI" },
      { name: "Random Forest", level: "Intermediate", category: "ML/AI" },
      { name: "XGBoost", level: "Intermediate", category: "ML/AI" },
      { name: "SHAP", level: "Intermediate", category: "ML/AI" }
    ]
  },

  {
    category: "Data",
    skills: [
      { name: "Pandas", level: "Advanced", category: "Data" },
      { name: "NumPy", level: "Advanced", category: "Data" },
      { name: "Data Cleaning", level: "Advanced", category: "Data" },
      { name: "Data Validation", level: "Advanced", category: "Data" },
      { name: "Feature Engineering", level: "Intermediate", category: "Data" },
      { name: "Statistical Analysis", level: "Advanced", category: "Data" }
    ]
  },

  {
    category: "Tools",
    skills: [
      { name: "Tableau", level: "Advanced", category: "Tools" },
      { name: "Excel", level: "Advanced", category: "Tools" },
      { name: "Jupyter", level: "Advanced", category: "Tools" },
      { name: "Git", level: "Advanced", category: "Tools" },
      { name: "Geotab API", level: "Advanced", category: "Tools" },
      { name: "asammdf", level: "Intermediate", category: "Tools" }
    ]
  },

  {
    category: "Cloud",
    skills: [
      { name: "AWS S3", level: "Advanced", category: "Cloud" },
      { name: "AWS Athena", level: "Advanced", category: "Cloud" },
      { name: "Firebase", level: "Advanced", category: "Cloud" },
      { name: "BigQuery", level: "Intermediate", category: "Cloud" }
    ]
  }
];

export const skillLevelColors = {
  Expert: "#10b981",
  Advanced: "#3b82f6",
  Intermediate: "#8b5cf6",
  Beginner: "#f59e0b"
} as const;

export const categoryIcons = {
  Programming: "💻",
  "ML/AI": "🤖",
  Data: "📊",
  Tools: "🛠️",
  Cloud: "☁️"
} as const;