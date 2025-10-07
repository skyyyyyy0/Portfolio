// Portfolio Projects Data - Real projects for black theme portfolio
export interface PortfolioProject {
  id: number;
  title: string;
  tagline: string;
  mockupImage: string;
  description: string;
  features: string[];
  technologies: string[];
  qrCodeUrl: string | null;
  appStoreUrl: string | null;
  gradient: string;
  accentColor: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Every AIdu",
    tagline: "AI that adapts to how you learn",
    mockupImage: "/assets/project1_bg.png",
    description: "An AI-driven education platform designed to help students master the SAT through personalized practice, smart analytics, and cutting-edge AI models. Built to support both learners and educators, Every AIdu delivers precision, speed, and impact.",
    features: [
      "Ongoing development of AI/NLP models for personalized practice.",
      "Free version available now, lowering barriers for students.",
      "Future partnerships with schools, libraries, and NGOs to expand access."
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Expo",
      "Firebase",
      "BigQuery",
      "FastAPI",
      "Docker",
      "AWS",
      "Python",
    ],
    qrCodeUrl: "/assets/everyaidu-qr.png",
    appStoreUrl: "https://apps.apple.com/app/everyaidu/id123456789",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accentColor: "#667eea"
  },
  {
    id: 2,
    title: "Energy Analytics Platform",
    tagline: "Data-driven insights for sustainable energy",
    mockupImage: "/assets/project2_bg.png",
    description: "A data-driven energy management platform analyzing New York's surplus electricity patterns to optimize resource distribution. Leverages machine learning to predict power surpluses and implements an equitable credit refund system for local communities.",
    features: [
      "Predictive modeling of surplus electricity using Random Forest (R² = 0.87)",
      "Borough-level energy consumption analysis with weather correlation insights.",
      "Equitable credit distribution system based on population and consumption ratios."
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "KNN",
      "Linear Regression",
      "Isolation Forest",
      "Pearson Correlation",
      "Spearman Correlation",
      "Matplotlib",
      "Seaborn"
    ],
    qrCodeUrl: null,
    appStoreUrl: null,
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
    accentColor: "#FF6B6B"
  },
  {
    id: 3,
    title: "Shortcut SAT",
    tagline: "Universal math education, simplified",
    mockupImage: "/assets/project3_bg.png",
    description: "The foundational project that sparked Every AIdu. A collaborative team effort building an intuitive math education app accessible to learners of all ages. Through user-centric design and streamlined problem-solving flows, Shortcut SAT proved that complex mathematical concepts could be made universally approachable—laying the groundwork for next-generation AI-powered learning.",
    features: [
      "Intuitive UI/UX design enabling seamless math practice across all age groups.",
      "Collaborative team development establishing scalable educational frameworks.",
      "Foundation architecture that evolved into Every AIdu's AI-powered platform."
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Expo",
      "Firebase",
      "iOS",
      "Android"
    ],      
    qrCodeUrl: null,
    appStoreUrl: null,
    gradient: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
    accentColor: "#4ECDC4"
  },
  {
    id: 4,
    title: "Every AIdu Analytics Dashboard",
    tagline: "Transforming user data into actionable learning insights",
    mockupImage: "/assets/project4_bg.png",
    description: "An intelligent analytics system that transforms Every AIdu user behavior into personalized learning strategies. By analyzing incorrect answer patterns, time spent per problem, attendance consistency, and engagement metrics, the platform identifies individual learning gaps and predicts optimal study paths. This data-driven approach enables precise curriculum customization, automatically highlighting areas requiring focused practice and adjusting difficulty levels to match each student's unique learning curve—delivering truly personalized education at scale.",
    features: [
      "Multi-dimensional data tracking: error patterns, solving time, attendance, and engagement metrics",
      "Predictive learning gap identification with automated difficulty adjustment algorithms",
      "Personalized study path generation based on individual performance analysis."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "BigQuery",
      "Firebase",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Docker",
      "AWS",
      "React",
      "TypeScript"
    ],
    qrCodeUrl: null,
    appStoreUrl: null,
    gradient: "linear-gradient(135deg, #FA709A 0%, #FEE140 100%)",
    accentColor: "#FA709A"
  }
];

// Technology color mapping for hover effects
export const technologyColors: Record<string, string> = {
  // Frontend
  "React": "#61DAFB",
  "React Native": "#61DAFB",
  "TypeScript": "#3178C6",
  "Tailwind CSS": "#06B6D4",
  "Expo": "#000020",
  
  // Backend
  "Python": "#3776AB",
  "FastAPI": "#009688",
  "Node.js": "#339933",
  
  // Database & Cloud
  "Firebase": "#FFCA28",
  "BigQuery": "#4285F4",
  "AWS": "#FF9900",
  "Docker": "#2496ED",
  
  // Data Science & ML
  "Pandas": "#150458",
  "NumPy": "#013243",
  "Scikit-learn": "#F7931E",
  "Random Forest": "#48bb78",
  "KNN": "#8b5cf6",
  "Linear Regression": "#ef4444",
  "Isolation Forest": "#f59e0b",
  "Pearson Correlation": "#06b6d4",
  "Spearman Correlation": "#ec4899",
  "Matplotlib": "#11557C",
  "Seaborn": "#3776AB",
  
  // Mobile
  "iOS": "#000000",
  "Android": "#3DDC84"
};

// Utility functions
export const getProjectsWithQR = () => 
  portfolioProjects.filter(p => p.qrCodeUrl !== null);

export const getProjectsByTechnology = (tech: string) =>
  portfolioProjects.filter(p => 
    p.technologies.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  );

export const getProjectById = (id: number) =>
  portfolioProjects.find(p => p.id === id);