import type { PersonalInfo } from '../types';

// Single Source of Truth for Personal Information
export const personalInfo: PersonalInfo = {
  name: "Haneul Jang",
  title: "Data Analyst",
  subtitle: "Exploring the Universe of Data Analytics",
  description: `I transform complex, event-driven data into reliable KPIs, interactive dashboards, and actionable business insights using Python, SQL, Tableau, and AWS.`,
  email: "haneul110721@gmail.com",
  location: "Edgewater, NJ/USA",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/skyyyyyy0",
      icon: "🐙"
    },
    {
      platform: "LinkedIn", 
      url: "https://linkedin.com/in/haneul-jang-1b8b9a190",
      icon: "💼"
    },
    // {
    //   platform: "Instagram",
    //   url: "https://instagram.com/every_aidu",
    //   icon: "📷"
    // },
    {
      platform: "Email",
      url: "mailto:haneul110721@gmail.com",
      icon: "📧"
    }
  ],
  resume: "assets/Data_Analyst_Haneul_Jang_Resume.pdf"
};

// Additional personal information
export const aboutMe = {
  shortBio: `Data Analyst transforming complex, event-driven data into reliable KPIs, dashboards, and actionable business insights`,
  
  careerGoals: `My goal is to join a Big Tech company where I can apply machine learning and statistical 
    modeling to problems that impact billions of users, while continuing to push the boundaries of 
    what's possible with data science.`,
  
  interests: [
    "Machine Learning & AI",
    "Large-scale Data Systems", 
    "Statistical Modeling",
    "Product Analytics",
    "A/B Testing & Experimentation",
    "MLOps & Model Deployment"
  ],
  
  experience: {
    yearsOfExperience: 1,
    projectsCompleted: 4,
    companiesWorked: 2
  }
};











