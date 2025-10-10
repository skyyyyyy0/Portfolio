import type { PersonalInfo } from '../types';

// Single Source of Truth for Personal Information
export const personalInfo: PersonalInfo = {
  name: "Haneul Jang",
  title: "Data Scientist",
  subtitle: "Exploring the Universe of Data Science",
  description: `I am an open-minded individual who loves exploring and learning new things. Outside of work, I enjoy running, exercising, reading books, and taking peaceful walks.`,
  email: "haneul110721@gmail.com",
  location: "New York City, NY/USA",
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
    {
      platform: "Instagram",
      url: "https://instagram.com/every_aidu",
      icon: "📷"
    },
    {
      platform: "Email",
      url: "mailto:haneul110721@gmail.com",
      icon: "📧"
    }
  ],
  resume: "https://www.linkedin.com/in/haneul-jang-1b8b9a190/"
};

// Additional personal information
export const aboutMe = {
  shortBio: `Data Scientist specializing in predictive modeling and data-driven product optimization. 
    Passionate about transforming complex data into actionable insights that scale to millions of users.`,
  
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
    projectsCompleted: 10,
    companiesWorked: 2
  }
};











