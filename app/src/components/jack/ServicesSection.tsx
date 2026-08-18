import FadeIn from "../FadeIn";

const SERVICES = [
  {
    no: "01",
    name: "Dashboard Design",
    body: "Power BI and Looker Studio dashboards built around the decisions they support — the right KPIs, laid out so the answer is obvious at a glance.",
  },
  {
    no: "02",
    name: "SQL Modelling",
    body: "Joins, CTEs and window functions turned into clean analytical models, with the data cleaning and validation that makes the numbers trustworthy.",
  },
  {
    no: "03",
    name: "Data Pipelines",
    body: "Azure Data Factory, Databricks and Synapse pipelines that move data from source to warehouse on a schedule, without manual exports in between.",
  },
  {
    no: "04",
    name: "Statistical Analysis",
    body: "Regression, correlation, reliability and hypothesis testing applied to real questions — with the assumptions and limitations stated plainly.",
  },
  {
    no: "05",
    name: "Business Reporting",
    body: "Structured reports and stakeholder-ready summaries that turn an analysis into something a team can act on this week.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-0 rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: "#FFFFFF" }}
    >
      <h2
        className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.no}
            delay={i * 0.1}
            className="flex items-start gap-5 py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
            style={{
              borderTop: i === 0 ? "1px solid rgba(12, 12, 12, 0.15)" : undefined,
              borderBottom: "1px solid rgba(12, 12, 12, 0.15)",
            }}
          >
            <span
              className="shrink-0 font-black leading-none text-[#0C0C0C]"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {service.no}
            </span>

            <div className="flex flex-col gap-3 pt-1 md:gap-4">
              <h3
                className="font-medium uppercase leading-tight text-[#0C0C0C]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {service.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                style={{
                  fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                  opacity: 0.6,
                }}
              >
                {service.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
