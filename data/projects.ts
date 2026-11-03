export interface Project {
  num: string;
  title: string;
  short: string;
  tags: string[];
  category: string;
  year: string;
  iconType: "brain" | "database" | "chart" | "package" | "layers";
  problem: string;
  approach: string;
  results: string;
  github: string;
  demo: string | null;
}

export const projects: Project[] = [
  {
    num: "01",
    title: "Student Dropout Prediction",
    short: "Predicting student dropout risk using machine learning to enable early intervention.",
    tags: ["Python", "Machine Learning", "Data Science"],
    category: "Data Science",
    year: "2025",
    iconType: "brain",
    problem:
      "High dropout rates in education institutions often go undetected until it's too late. Early identification of at-risk students can enable timely intervention.",
    approach:
      "Built a classification model using Python and scikit-learn. Performed feature engineering on academic, demographic, and behavioral data. Evaluated multiple models including Random Forest and Gradient Boosting.",
    results:
      "Achieved strong predictive accuracy with interpretable feature importance analysis. Model insights were translated into actionable recommendations for academic advisors.",
    github: "https://github.com/athayaramdani",
    demo: null,
  },
  {
    num: "02",
    title: "Retail Sales Analysis",
    short: "SQL-based deep dive into retail transaction data to uncover performance patterns.",
    tags: ["SQL", "MySQL", "Data Analytics"],
    category: "Data Analytics",
    year: "2025",
    iconType: "database",
    problem:
      "A retail dataset with thousands of transactions needed structured analysis to reveal sales trends, customer behavior, and product performance.",
    approach:
      "Used MySQL to write complex queries, CTEs, and window functions. Segmented sales by region, time period, and product category. Identified top and bottom performers.",
    results:
      "Delivered a comprehensive analysis report with visualizations. Surfaced key insights on seasonal patterns and underperforming product lines.",
    github: "https://github.com/athayaramdani",
    demo: null,
  },
  {
    num: "03",
    title: "Business Intelligence Dashboard",
    short: "An interactive BI dashboard translating data into visual business insight.",
    tags: ["Looker Studio", "Data Visualization", "BI"],
    category: "Business Intelligence",
    year: "2025",
    iconType: "chart",
    problem:
      "Business stakeholders needed a clear, interactive way to monitor KPIs and trends without querying raw data themselves.",
    approach:
      "Designed and built a dashboard in Looker Studio, connecting to structured data sources. Applied BI best practices for layout, color use, and KPI prominence.",
    results:
      "Produced a clean, interactive dashboard enabling non-technical users to independently explore business metrics and trends.",
    github: "https://github.com/athayaramdani",
    demo: null,
  },
  {
    num: "04",
    title: "Amazon Delivery Analysis",
    short: "Exploratory data analysis on Amazon delivery data to find patterns and anomalies.",
    tags: ["Python", "EDA", "Data Visualization"],
    category: "Data Analytics",
    year: "2024",
    iconType: "package",
    problem:
      "A large delivery dataset needed thorough exploration to understand delivery performance, identify delays, and surface geographic patterns.",
    approach:
      "Conducted end-to-end EDA using Python (Pandas, Matplotlib, Seaborn). Cleaned and preprocessed the data, then visualized distributions, correlations, and outliers.",
    results:
      "Produced a full EDA notebook with well-documented findings, clear visualizations, and actionable observations on delivery performance.",
    github: "https://github.com/athayaramdani",
    demo: null,
  },
  {
    num: "05",
    title: "Academic Information Systems Projects",
    short: "System analysis, database design, and information systems coursework projects.",
    tags: ["System Analysis", "Database", "Information Systems"],
    category: "Information Systems",
    year: "2025",
    iconType: "layers",
    problem:
      "Academic coursework covering the full lifecycle of information systems — from requirements analysis to database design and implementation.",
    approach:
      "Applied SDLC methodologies, created data flow diagrams, entity-relationship diagrams, and implemented relational database schemas for academic case studies.",
    results:
      "Completed multiple IS projects demonstrating understanding of system design principles, database normalization, and process modeling.",
    github: "https://github.com/athayaramdani",
    demo: null,
  },
];
