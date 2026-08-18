import { motion } from "framer-motion";
import { experience } from "../lib/site";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Professional Journey"
          title="Experience &"
          italicWord="career"
          subtext="From engineering design floors to analytics work that shapes business decisions."
        />

        <div className="relative">
          <span className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-stroke md:block" />

          <div className="flex flex-col gap-6 md:gap-10">
            {experience.map((role, i) => (
              <motion.article
                key={role.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group relative md:pl-12"
              >
                <span className="accent-gradient absolute left-0 top-2 hidden h-4 w-4 rounded-full md:block">
                  <span className="absolute inset-[3px] rounded-full bg-bg" />
                </span>

                <div className="rounded-3xl border border-stroke bg-surface p-6 transition-colors duration-500 hover:border-white/20 md:p-8">
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <div>
                      <h3 className="text-xl text-text-primary md:text-2xl">
                        {role.role}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{role.org}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-stroke px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-muted">
                      {role.period}
                    </span>
                  </div>

                  <ul className="mt-6 flex flex-col gap-3">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="accent-gradient mt-2 h-1 w-4 shrink-0 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
