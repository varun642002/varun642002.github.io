// Single place for the personal details the page renders, so copy edits do not
// mean hunting through components.
export const site = {
  name: "Varun S.",
  initials: "VS",
  eyebrow: "PORTFOLIO '26",
  roles: ["Analyst", "Engineer", "Builder", "Scholar"],
  roleLine: (role: string) => `A ${role} who turns data into decisions.`,
  description:
    "Building analytics that people act on — SQL models, Power BI dashboards and Azure pipelines, from raw extract to the decision it supports.",
  email: "varunaadithiya@gmail.com",
  resume: "/Varun_S_Resume_DataAnalyst.pdf",
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

export const works = [
  {
    title: "ForgeInsight",
    kind: "AI Analytics Platform",
    image: "/art/work-forgeinsight.svg",
    href: "https://ai-data-analytics-workspace.vercel.app/",
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/11]",
  },
  {
    title: "Retail Analytics",
    kind: "SQL • Power BI",
    image: "/art/work-retail.svg",
    href: "",
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-[16/11]",
  },
  {
    title: "E-Commerce Insights",
    kind: "Power BI • Customer Analytics",
    image: "/art/work-ecommerce.svg",
    href: "",
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-[16/11]",
  },
  {
    title: "HR Analytics",
    kind: "Looker Studio • Attrition",
    image: "/art/work-hr.svg",
    href: "",
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/11]",
  },
];

export const journal = [
  {
    title: "Modelling 100k retail rows without a warehouse",
    image: "/art/journal-01.svg",
    read: "6 min read",
    date: "Jul 2026",
  },
  {
    title: "DAX patterns I reach for on every dashboard",
    image: "/art/journal-02.svg",
    read: "4 min read",
    date: "May 2026",
  },
  {
    title: "What a regression on 166 farms actually told me",
    image: "/art/journal-03.svg",
    read: "8 min read",
    date: "Mar 2026",
  },
  {
    title: "Azure Data Factory: the pipeline I keep rebuilding",
    image: "/art/journal-04.svg",
    read: "5 min read",
    date: "Jan 2026",
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
  { value: "12+", label: "Projects Shipped" },
  { value: "8", label: "Certifications Earned" },
];
