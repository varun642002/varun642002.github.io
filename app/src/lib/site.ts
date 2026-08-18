// Single place for the personal details the page renders, so copy edits do not
// mean hunting through components.
export const site = {
  name: "Varun S.",
  initials: "VS",
  eyebrow: "PORTFOLIO '26",
  roles: ["Analyst", "Engineer", "Builder", "Scholar"],
  description:
    "Building analytics that people act on — SQL models, Power BI dashboards and Azure pipelines, from raw extract to the decision it supports.",
  email: "varunaadithiya@gmail.com",
  resume: "/Varun_S_Resume_DataAnalyst.pdf",
  contactLine:
    "Open to opportunities in data analytics, business analytics, business intelligence and entry-level data engineering roles.",
  socials: [
    { label: "GitHub", href: "https://github.com/varun642002" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/varun64200/" },
    { label: "Email", href: "mailto:varunaadithiya@gmail.com" },
  ],
  heroVideo:
    "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8",
};

export const about = {
  paragraph:
    "I started out in automobile engineering — brake systems, test rigs, Formula Student deadlines — and moved into business analytics because the questions I cared about were always in the data. Today I build SQL models, Power BI dashboards and Azure pipelines that turn messy operational data into decisions people actually make. Let's build something with yours!",
};

export const skills = [
  {
    no: "01",
    title: "Data Analytics & BI",
    body: "Power BI, Advanced Excel, Power Query, Looker Studio, Tableau, SPSS, and R.",
  },
  {
    no: "02",
    title: "SQL & Databases",
    body: "SQL queries, joins, aggregations, CTEs, window functions, data cleaning, relational databases, and analytical querying.",
  },
  {
    no: "03",
    title: "Cloud Data Engineering",
    body: "Azure Data Factory, Azure Databricks, Azure Synapse Analytics, Dataflows, Pipelines, and Azure Key Vault.",
  },
  {
    no: "04",
    title: "Programming",
    body: "Basic Python for data analysis and automation, along with foundational CSS knowledge.",
  },
  {
    no: "05",
    title: "Statistical Analysis",
    body: "Descriptive statistics, Pearson correlation, regression analysis, hypothesis testing, reliability analysis, and ROI analysis.",
  },
  {
    no: "06",
    title: "Business Analytics",
    body: "KPI development, requirements analysis, dashboard design, business reporting, stakeholder communication, and insight generation.",
  },
];

export type Work = {
  no: string;
  title: string;
  kind: string;
  subtitle: string;
  body: string;
  tags: string[];
  image: string;
  href: string;
  linkLabel: string;
  span: string;
  aspect: string;
  stats?: { value: string; label: string }[];
};

export const works: Work[] = [
  {
    no: "01",
    title: "ForgeInsight",
    kind: "Featured • AI Analytics Platform",
    subtitle: "AI-powered data analytics workspace",
    body: "An analytics workspace where users upload datasets, explore data, generate insights and work through analytical workflows in a modern web interface.",
    tags: ["AI Analytics", "Data Analysis", "Dashboard", "Web Application"],
    image: "/art/work-forgeinsight.svg",
    href: "https://ai-data-analytics-workspace.vercel.app/",
    linkLabel: "View live application",
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
  },
  {
    no: "02",
    title: "Retail Sales & Inventory Analytics",
    kind: "SQL • Power BI",
    subtitle: "Enterprise-scale retail analytics",
    body: "More than 100,000 sales records analysed to identify revenue trends, understand customer behaviour, evaluate product performance and support inventory decisions.",
    tags: ["SQL", "Power BI", "Data Modeling", "DAX", "Power Query"],
    image: "/art/work-retail.svg",
    href: "",
    linkLabel: "",
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
  },
  {
    no: "03",
    title: "E-Commerce Customer & Sales Analytics",
    kind: "Power BI • E-Commerce",
    subtitle: "Multi-table commerce analysis",
    body: "Orders, payments, products, customers, sellers and order items joined to surface revenue patterns, customer behaviour, seller performance and operational opportunities.",
    tags: ["Power BI", "SQL", "Customer Analytics", "Data Visualization"],
    image: "/art/work-ecommerce.svg",
    href: "",
    linkLabel: "",
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
  },
  {
    no: "04",
    title: "HR Analytics Dashboard",
    kind: "Looker Studio • HR Analytics",
    subtitle: "Interactive workforce analytics",
    body: "Attrition, demographics, job roles, compensation, satisfaction and organisational trends in one interactive workforce dashboard.",
    tags: ["Looker Studio", "HR Analytics", "Dashboard Design", "Data Visualization"],
    image: "/art/work-hr.svg",
    href: "",
    linkLabel: "",
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
  },
  {
    no: "05",
    title: "Agricultural Machinery Adoption & Crop Returns",
    kind: "MBA Master Thesis • 2026",
    subtitle: "Economic analysis using an ROI framework",
    body: "An empirical study of the financial impact of machinery adoption, using primary data from 166 farming households — descriptive statistics, Pearson correlation, reliability analysis, multiple regression and hypothesis testing.",
    tags: [
      "Statistical Analysis",
      "Regression",
      "Pearson Correlation",
      "Hypothesis Testing",
      "ROI Analysis",
    ],
    image: "/art/work-thesis.svg",
    href: "",
    linkLabel: "",
    stats: [
      { value: "166", label: "Farming households" },
      { value: "0.7789", label: "Cronbach alpha" },
      { value: "84.94%", label: "Positive ROI impact" },
      { value: "83%", label: "Yield improvement" },
    ],
    span: "md:col-span-6",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
  },
  {
    no: "06",
    title: "Formula Student Brake System",
    kind: "B.E. Final Year Project • 2024",
    subtitle: "Automobile engineering • Formula Student vehicle",
    body: "Design and development of an effective braking system for a Formula Student vehicle — engineering design, braking performance, vehicle safety and component selection.",
    tags: [
      "Automobile Engineering",
      "Formula Student",
      "Brake System Design",
      "Vehicle Dynamics",
      "Vehicle Safety",
    ],
    image: "/art/work-brake.svg",
    href: "/Varun_S_Formula_Student_Brake_Project.pdf",
    linkLabel: "View project report",
    span: "md:col-span-6",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
  },
];

export const experience = [
  {
    role: "Business Analytics Intern",
    org: "Aruna Agencies • Namakkal",
    period: "May 2025 – Nov 2025",
    points: [
      "Analysed more than 50,000 rows of operational and sales data using SQL and Advanced Excel.",
      "Identified key patterns, gaps, anomalies and business-performance opportunities.",
      "Built structured analytical reports and dashboards for business decision-making.",
      "Prepared more than 10 structured analytical reports for senior stakeholders.",
      "Ran customer research with approximately 150 farmers and analysed satisfaction trends.",
      "Performed competitor analysis across 13 outlets to evaluate market positioning.",
      "Used Power BI, Excel, pivot tables, visual reporting and SPSS to turn raw operational data into actionable insight.",
    ],
  },
  {
    role: "Junior Design Engineer",
    org: "Ponnar Sankar Tractor",
    period: "2020 – 2021",
    points: [
      "Supported engineering design and technical development in the agricultural machinery industry.",
      "Applied practical engineering principles to design tasks and technical problem-solving.",
      "Collaborated with technical teams inside structured engineering workflows.",
      "Built the practical problem-solving foundation that later supported the move into analytics.",
    ],
  },
  {
    role: "Data Analytics & Data Engineering Journey",
    org: "Independent Projects & Professional Development",
    period: "2024 – Present",
    points: [
      "Built analytics projects using SQL, Power BI, Excel, Looker Studio and BI tooling.",
      "Expanded into cloud data engineering with Azure Data Factory, Databricks, Synapse Analytics, Dataflows, Pipelines and Key Vault.",
      "Developed ForgeInsight, an AI-powered analytics workspace for dataset exploration and insight generation.",
      "Created portfolio projects across retail, e-commerce, HR analytics, financial analysis, statistical research and data engineering.",
    ],
  },
];

export const achievements = [
  {
    tag: "2024",
    title: "SAE Student of the Year",
    body: "Recognised for technical contribution, leadership, engineering involvement and active participation in SAE initiatives.",
  },
  {
    tag: "2023",
    title: "Team Manager — SAE SUPRA",
    body: "Led a 30-member Formula Student team to 2nd place among approximately 80 teams nationwide.",
  },
  {
    tag: "2023",
    title: "Vice Captain — FMAE Formula Student",
    body: "Contributed to a national 3rd-place finish, including 1st place in the design and acceleration events.",
  },
  {
    tag: "2022",
    title: "Group Captain — Electric Vehicle Project",
    body: "Led an electric vehicle project team to 1st place overall among 25 competing teams.",
  },
  {
    tag: "Leadership",
    title: "30-Member Team Leadership",
    body: "Managed multidisciplinary engineering activities, coordinated responsibilities and supported technical decision-making toward national competition objectives.",
  },
  {
    tag: "Transition",
    title: "Engineering to Data & Analytics",
    body: "Moved from automobile engineering into business analytics, data analysis, cloud data engineering and AI-powered application development.",
  },
];

export const education = [
  {
    period: "2024 – 2026",
    degree: "Master of Business Administration",
    field: "Business Analytics",
    school: "CMS Business School, JAIN (Deemed-to-be University)",
    body: "Business analytics, data analysis, statistics, business intelligence, machine learning for business, finance, management and data-driven decision-making.",
  },
  {
    period: "Completed 2024",
    degree: "Bachelor of Engineering",
    field: "Automobile Engineering",
    school: "Bannari Amman Institute of Technology",
    body: "Engineering design, vehicle systems, Formula Student development, technical problem-solving, project management and team leadership.",
  },
];

export const certifications = [
  {
    no: "01",
    badge: "AI",
    year: "2025",
    title: "AI for Solving Business Problems",
    issuer: "JAIN (Deemed-to-be University)",
    body: "Applied artificial intelligence concepts to identify, analyse and solve practical business problems through data-driven approaches.",
    tags: ["Artificial Intelligence", "Business Analytics", "Problem Solving"],
    code: "NIQSZ1ZBJNMK",
  },
  {
    no: "02",
    badge: "OB",
    year: "2024",
    title: "Organizational Behavior: How to Manage People",
    issuer: "IESE Business School",
    body: "Organisational behaviour, people management, motivation, leadership and effective workplace collaboration.",
    tags: ["Leadership", "People Management", "Organizational Behavior"],
    code: "L68LD7JI0ZVA",
  },
  {
    no: "03",
    badge: "FA",
    year: "2024",
    title: "Financial Accounting Fundamentals",
    issuer: "University of Virginia — Darden School of Business",
    body: "Financial statements, accounting principles, business transactions and financial performance analysis.",
    tags: ["Financial Accounting", "Business Finance", "Financial Analysis"],
    code: "N922Z9PPIRAE",
  },
  {
    no: "04",
    badge: "ST",
    year: "2024",
    title: "Basic Statistics",
    issuer: "University of Amsterdam",
    body: "Descriptive statistics, probability, correlation, statistical inference and data-driven interpretation.",
    tags: ["Statistics", "Data Analysis", "Probability"],
    code: "XC17FOVU0FCG",
  },
  {
    no: "05",
    badge: "ML",
    year: "2025",
    title: "Machine Learning for Business",
    issuer: "JAIN (Deemed-to-be University)",
    body: "Machine learning applied to business decision-making, predictive analytics and practical organisational challenges.",
    tags: ["Machine Learning", "Predictive Analytics", "Business Intelligence"],
    code: "Y0QY7134J9BU",
  },
  {
    no: "06",
    badge: "SA",
    year: "2025",
    title: "Security Analytics and Portfolio Management",
    issuer: "JAIN (Deemed-to-be University)",
    body: "Investment analysis, security evaluation, portfolio construction, risk assessment and data-informed financial decisions.",
    tags: ["Portfolio Management", "Security Analysis", "Finance"],
    code: "9GVUERGS1ZLF",
  },
  {
    no: "07",
    badge: "CG",
    year: "2025",
    title: "Corporate Governance & Practices",
    issuer: "JAIN (Deemed-to-be University)",
    body: "Governance frameworks, accountability, ethical business practice, stakeholder management and organisational oversight.",
    tags: ["Corporate Governance", "Business Ethics", "Management"],
    code: "P25TT39KICL0",
  },
  {
    no: "08",
    badge: "IBM",
    year: "2025",
    title: "Building Generative AI-Powered Applications with Python",
    issuer: "IBM",
    body: "Building generative AI applications with Python and modern AI tooling, with a focus on practical application development.",
    tags: ["Generative AI", "Python", "AI Applications"],
    code: "VWEX4OCU3CWH",
  },
];

export const explorations = [
  "/art/explore-01.svg",
  "/art/explore-02.svg",
  "/art/explore-03.svg",
  "/art/explore-04.svg",
  "/art/explore-05.svg",
  "/art/explore-06.svg",
];

export const stats = [
  { value: "100K+", label: "Records Analysed" },
  { value: "30", label: "Member Team Led" },
  { value: "8", label: "Certifications Earned" },
];
