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
    github: "https://github.com/TayaAthaya",
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
    github: "https://github.com/TayaAthaya",
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
    github: "https://github.com/TayaAthaya",
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
    github: "https://github.com/TayaAthaya",
    demo: null,
  },
  {
    num: "05",
    title: "Bank Loan Prediction & Credit Scoring App",
    short: "A machine learning web application predicting bank loan approval eligibility based on applicant financial and credit profiles.",
    tags: ["Machine Learning", "Streamlit", "Python", "Scikit-Learn"],
    category: "Machine Learning",
    year: "2025",
    iconType: "brain",
    problem:
      "Financial institutions evaluate thousands of loan applications where manual underwriting is time-consuming and vulnerable to human inconsistency. An automated, data-driven solution was needed to predict credit eligibility quickly while flagging primary risk indicators.",
    approach:
      "Performed exploratory data analysis (EDA) to understand feature correlations. Handled missing data, executed categorical label encoding, and trained a Random Forest Classifier with Scikit-Learn. Deployed the complete pipeline into an interactive web interface powered by Streamlit Cloud.",
    results:
      "Attained 83.19% classification accuracy on test evaluation data. Identified Credit History as the single most critical driver in loan approval outcomes. Successfully delivered an accessible public web application with instant inference.",
    github: "https://github.com/TayaAthaya/Credit-score-app",
    demo: "https://credit-score-app-9eufarm5jay3dhy2hboev4.streamlit.app/",
  },
];
