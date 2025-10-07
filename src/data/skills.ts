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
      { name: "Scala", level: "Intermediate", category: "Programming" },
      { name: "Java", level: "Intermediate", category: "Programming" }
    ]
  },
  {
    category: "ML/AI",
    skills: [
      { name: "TensorFlow", level: "Expert", category: "ML/AI" },
      { name: "PyTorch", level: "Advanced", category: "ML/AI" },
      { name: "Scikit-learn", level: "Expert", category: "ML/AI" },
      { name: "Keras", level: "Advanced", category: "ML/AI" },
      { name: "XGBoost", level: "Advanced", category: "ML/AI" },
      { name: "LightGBM", level: "Advanced", category: "ML/AI" },
      { name: "Transformers", level: "Advanced", category: "ML/AI" },
      { name: "OpenCV", level: "Intermediate", category: "ML/AI" },
      { name: "NLTK", level: "Advanced", category: "ML/AI" },
      { name: "spaCy", level: "Advanced", category: "ML/AI" }
    ]
  },
  {
    category: "Data",
    skills: [
      { name: "Pandas", level: "Expert", category: "Data" },
      { name: "NumPy", level: "Expert", category: "Data" },
      { name: "Apache Spark", level: "Advanced", category: "Data" },
      { name: "Apache Kafka", level: "Intermediate", category: "Data" },
      { name: "Airflow", level: "Advanced", category: "Data" },
      { name: "dbt", level: "Advanced", category: "Data" },
      { name: "Snowflake", level: "Advanced", category: "Data" },
      { name: "PostgreSQL", level: "Advanced", category: "Data" },
      { name: "MongoDB", level: "Intermediate", category: "Data" },
      { name: "Redis", level: "Intermediate", category: "Data" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Jupyter", level: "Expert", category: "Tools" },
      { name: "Git", level: "Expert", category: "Tools" },
      { name: "Docker", level: "Advanced", category: "Tools" },
      { name: "Kubernetes", level: "Intermediate", category: "Tools" },
      { name: "MLflow", level: "Advanced", category: "Tools" },
      { name: "Weights & Biases", level: "Advanced", category: "Tools" },
      { name: "Tableau", level: "Advanced", category: "Tools" },
      { name: "Power BI", level: "Intermediate", category: "Tools" },
      { name: "Grafana", level: "Intermediate", category: "Tools" },
      { name: "Prometheus", level: "Intermediate", category: "Tools" }
    ]
  },
  {
    category: "Cloud",
    skills: [
      { name: "AWS", level: "Advanced", category: "Cloud" },
      { name: "Google Cloud", level: "Intermediate", category: "Cloud" },
      { name: "Azure", level: "Intermediate", category: "Cloud" },
      { name: "AWS SageMaker", level: "Advanced", category: "Cloud" },
      { name: "Google Vertex AI", level: "Intermediate", category: "Cloud" },
      { name: "AWS Lambda", level: "Advanced", category: "Cloud" },
      { name: "EC2", level: "Advanced", category: "Cloud" },
      { name: "S3", level: "Expert", category: "Cloud" },
      { name: "RDS", level: "Advanced", category: "Cloud" },
      { name: "Terraform", level: "Intermediate", category: "Cloud" }
    ]
  }
];

// 기술 레벨에 따른 색상 매핑
export const skillLevelColors = {
  Expert: "#10b981",      // 초록색
  Advanced: "#3b82f6",    // 파란색
  Intermediate: "#8b5cf6", // 보라색
  Beginner: "#f59e0b"     // 주황색
} as const;
// 카테고리별 아이콘
export const categoryIcons = {
  Programming: "💻",
  "ML/AI": "🤖",
  Data: "📊", 
  Tools: "🛠️",
  Cloud: "☁️"
} as const;