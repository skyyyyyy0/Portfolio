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
  githubUrl?: string;
  gradient: string;
  accentColor: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Fleet Telematics Analytics",
    tagline: "Data-driven fleet insights",
    mockupImage: "/assets/geotab_dashboard.png",
    description: "Analyzed approximately 1.7M event-driven telemetry records from 12 commercial vehicles to measure changes in fuel efficiency and driving behavior before and after device installation. Built a time-aware analytics pipeline and FEI-Lite scoring framework to transform irregular telematics data into actionable fleet insights.",
    features: [
      "Built vehicle-specific 30-day before-and-after datasets using the Geotab API.",
      "Validated fuel and distance counters and applied time-weighted aggregation to reduce bias from irregular reporting intervals.",
      "Scored 12/12 vehicles and delivered 3 Tableau dashboards, identifying 4 improving and 8 declining vehicles."
    ],
    technologies: [
      "Python",
      "Pandas",
      "SQL",
      "Geotab API",
      "AWS S3",
      "AWS Athena",
      "Excel",
      "Tableau"
    ],
    qrCodeUrl: null,
    appStoreUrl: null,
    githubUrl: "https://github.com/skyyyyyy0/fleet-telemetry-analytics",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accentColor: "#667eea"
  },
  {
    id: 2,
    title: "Fuel Consumption Diagnostics",
    tagline: "Physics-guided fuel analytics",
    mockupImage: "/assets/actual_vs_expected_comparison.png",
    description:
    "An early-stage analytics prototype that estimates expected trip-level fuel consumption from sparse, event-driven vehicle telemetry. CACE V1 combines a physics-based baseline with machine-learning residual correction to identify vehicles consuming more or less fuel than expected.",
    features: [
      "Built a trip-level modeling dataset from sparse, irregular vehicle telemetry.",
      "Combined a physics-based baseline with Random Forest residual correction, improving final-test MAE by 2.64%.",
      "Applied chronological and leave-one-vehicle-out validation and used SHAP to explain the main drivers of fuel deviation."
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "SHAP",
      "Matplotlib",
      "AWS S3",
      "AWS Athena"
    ],
    qrCodeUrl: null,
    appStoreUrl: null,
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
    accentColor: "#FF6B6B"
  },
  {
    id: 3,
    title: "Vehicle CAN Analytics & IMU Validation",
    tagline: "Validated insights from raw CAN data",
    mockupImage: "/assets/vehicle_can_imu_validation_dashboard.png",
    description:
      "An end-to-end analytics workflow that processed more than 1.9 million raw MF4 CAN records and evaluated decoded IMU activity against J1939 Speed and RPM ground truth. Because validation covered one anonymized vehicle and session, the resulting IMU rule is presented as an activity proxy rather than a production classifier.",
    features: [
      "Parsed 1.9M+ MF4 CAN records and engineered aligned one-second IMU and J1939 validation windows.",
      "Achieved a Validation Macro F1 of 0.8500 and Balanced Accuracy of 0.8333 using a chronologically selected threshold.",
      "Matched Python and Athena SQL results across 41/41 checks and delivered an interactive Tableau validation dashboard."
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "asammdf",
      "SQL",
      "AWS S3",
      "AWS Athena",
      "Tableau",
      "Matplotlib"
    ],
    qrCodeUrl: null,
    appStoreUrl: null,
    githubUrl: "https://github.com/skyyyyyy0/vehicle-can-analysis",
    gradient: "linear-gradient(135deg, #FA709A 0%, #FEE140 100%)",
    accentColor: "#FA709A"
  },
  {
      id: 4,
      title: "Every AIdu",
      tagline: "AI that adapts to how you learn",
      mockupImage: "/assets/project1_bg.png",
      description:
        "An AI-driven education platform designed to help students master the SAT through personalized practice, smart analytics, and cutting-edge AI models. Built to support both learners and educators, Every AIdu delivers precision, speed, and impact.",
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
        "Python"
      ],
    qrCodeUrl: "/assets/everyaidu-qr.png",
    appStoreUrl: "https://apps.apple.com/app/everyaidu/id123456789",
    gradient: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
    accentColor: "#4ECDC4"
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