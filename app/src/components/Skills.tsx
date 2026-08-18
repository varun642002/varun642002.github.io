import { motion } from "framer-motion";
import { skills } from "../lib/site";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Technical Expertise"
          title="Skills &"
          italicWord="technologies"
          subtext="A practical stack spanning analytics, business intelligence, databases, cloud data engineering and foundational programming."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative rounded-3xl p-[1px] transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="accent-gradient-animated absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative h-full rounded-3xl border border-stroke bg-surface p-6 md:p-7">
                <span className="font-display text-2xl italic text-muted">
                  {skill.no}
                </span>
                <h3 className="mb-3 mt-4 text-lg text-text-primary md:text-xl">
                  {skill.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{skill.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
