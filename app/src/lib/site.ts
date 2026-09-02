// Single place for the personal details the page renders, so copy edits do not
// mean hunting through components.
export const site = {
  name: "Varun S.",
  initials: "VS",
  photo: "/profile.png",
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
    "I started out in automobile engineering — brake systems, test rigs, Formula Student deadlines — and moved into business analytics because the questions I cared about were always in the data. Day to day that means SQL models, Power BI and Looker dashboards, and Azure pipelines that turn messy operational data into decisions people actually make. The rest of the time I ship the analysis as software: IGNYT, an offline-first fitness app on Google Play; IGNYT Coach, the platform trainers run their clients from; AuraVault, a family health record vault; and MoneyVault, an expense tracker built on a single live ledger. Let's build something with yours!",
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
  {
    no: "07",
    title: "Generative AI & LLM Applications",
    body: "Generative AI with Python (IBM certified), AI-powered analytics application development, and using ChatGPT and Gemini as working tools for research, analysis and drafting.",
  },
  {
    no: "08",
    title: "Machine Learning for Business",
    body: "Machine Learning for Business (Jain certified), predictive analytics, and framing business questions as problems a model can actually answer.",
  },
  {
    no: "09",
    title: "Application Development",
    body: "Shipping the analysis as a product: FastAPI and PostgreSQL services, Next.js and React front ends, React Native and Capacitor builds, and Firebase.",
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
  // Real product screenshots, where they exist. Projects without a
  // shippable UI fall back to the generated artwork in `image`.
  shots?: string[];
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
  {
    no: "07",
    title: "IGNYT Coach",
    kind: "SaaS Platform • FastAPI + Next.js",
    subtitle: "Trainer platform for coaches and gyms",
    body: "A platform for personal trainers, gyms, nutritionists and online coaches — clients, programmes, meal plans, check-ins, messaging and billing, with assigned work syncing straight into the client's IGNYT app. FastAPI and PostgreSQL behind a Next.js dashboard that also ships as an Android build.",
    tags: ["FastAPI", "PostgreSQL", "Next.js", "Capacitor", "Payments"],
    image: "/art/work-ignyt.svg",
    href: "https://ignyt-coach.vercel.app",
    linkLabel: "View live application",
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
  },
  {
    no: "08",
    title: "AuraVault",
    kind: "Mobile App • React Native + Firebase",
    subtitle: "Family health record platform",
    body: "One place for a household's health: patients and dependents, medical records, medicines, vaccinations, appointments, insurance and expenses, with OCR document processing and an AI health assistant. Built on Firebase so record ownership is enforced by document path in security rules rather than by application code.",
    tags: ["React Native", "Expo", "Firebase", "Firestore", "OCR"],
    image: "/shots/auravault-home.webp",
    shots: [
      "/shots/auravault-home.webp",
      "/shots/auravault-records.webp",
      "/shots/auravault-explore.webp",
    ],
    href: "",
    linkLabel: "",
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
  },
  {
    no: "09",
    title: "MoneyVault",
    kind: "Expense Tracker • React + TypeScript",
    subtitle: "Personal finance command center",
    body: "An expense tracker where every figure on screen is derived from one live ledger and every action writes back to it — budgets, goals, net worth, cash-flow projection and payday allocation. Bank statements import from CSV, Excel or PDF through a column mapper and categorisation rules, with an audit trail and undo per import.",
    tags: ["React", "TypeScript", "Tailwind", "Capacitor", "Data Import"],
    image: "/shots/moneyvault-dashboard.webp",
    shots: [
      "/shots/moneyvault-dashboard.webp",
      "/shots/moneyvault-cashflow.webp",
      "/shots/moneyvault-budgets.webp",
    ],
    href: "",
    linkLabel: "",
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
  },
  {
    no: "10",
    title: "IGNYT",
    kind: "Android App • Capacitor + Health Connect",
    subtitle: "Offline-first fitness and nutrition tracker",
    body: "A fitness app that works with no signal and no account: workout planning, training schedules, a 1000+ exercise library, HYROX plans, nutrition and a food database, hydration, fasting and body-weight tracking, with weekly analytics over the top. Ships to Google Play as com.varun.ignyt through Capacitor, reads and writes Google Health Connect, and has an iOS build with a Swift HealthKit plugin behind Codemagic CI.",
    tags: ["Capacitor", "Android", "Health Connect", "Offline-first", "Next.js"],
    image: "/shots/ignyt-home.webp",
    shots: [
      "/shots/ignyt-home.webp",
      "/shots/ignyt-features.webp",
      "/shots/ignyt-download.webp",
    ],
    href: "https://igny-tfit-in.vercel.app",
    linkLabel: "View live site",
    span: "md:col-span-5",
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
    body: "The chapter's annual award, given for sustained technical contribution, leadership and active participation across SAE engineering initiatives rather than for a single event or result. It followed three consecutive years of competition work, from the electric vehicle project in 2022 through two Formula Student campaigns.",
    metrics: ["Annual chapter award", "3 years of competition work"],
  },
  {
    tag: "2023",
    title: "Team Manager — SAE SUPRA",
    body: "Ran a 30-member Formula Student team through a national campaign, finishing 2nd among roughly 80 teams. The role was project coordination as much as engineering: holding schedules and responsibilities across subsystems, and carrying technical decisions to a build that had to pass scrutineering and then actually race.",
    metrics: ["30-member team", "2nd of ~80 teams", "National"],
  },
  {
    tag: "2023",
    title: "Vice Captain — FMAE Formula Student",
    body: "Second-in-command on a campaign that placed 3rd nationally overall and took 1st in two individual events — design and acceleration. Winning the design event is a judged result: the team defends its engineering choices to a panel, so it rewards the reasoning behind the car rather than its lap time.",
    metrics: ["3rd overall", "1st — design", "1st — acceleration"],
  },
  {
    tag: "2022",
    title: "Group Captain — Electric Vehicle Project",
    body: "Led an electric vehicle project team to 1st place overall against 25 competing teams. This was the first of the three competition years and the entry point into leading a build team rather than working inside one.",
    metrics: ["1st overall", "25 teams"],
  },
  {
    tag: "Leadership",
    title: "Three Years of Team Leadership",
    body: "Group Captain in 2022, Vice Captain and Team Manager in 2023, Student of the Year in 2024 — three consecutive years of leading multidisciplinary engineering teams toward national competition deadlines. The recurring work was coordinating people with different specialisms around a fixed date and a car that had to run.",
    metrics: ["2022 → 2024", "Multidisciplinary teams"],
  },
  {
    tag: "Transition",
    title: "Engineering to Data & Analytics",
    body: "B.E. in Automobile Engineering (2021–2024) followed directly by an MBA in Business Analytics (2024–2026), moving from mechanical design into data analysis, cloud data engineering and AI-powered application development. The engineering habit that carried over is the useful one: define the measurement before trusting the number.",
    metrics: ["B.E. Automobile", "MBA Business Analytics"],
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

export const stats = [
  { value: "100K+", label: "Records Analysed" },
  { value: "30", label: "Member Team Led" },
  { value: "8", label: "Certifications Earned" },
];
