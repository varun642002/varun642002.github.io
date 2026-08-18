import { motion } from "framer-motion";
import { education } from "../lib/site";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Academic Background"
          title="Education &"
          italicWord="study"
          subtext="An engineering foundation, then business analytics — the two halves of how I work."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {education.map((item, i) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative overflow-hidden rounded-3xl border border-stroke bg-surface p-7 transition-colors duration-500 hover:border-white/20 md:p-9"
            >
              <span className="accent-gradient absolute left-0 top-0 h-full w-[3px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="text-xs uppercase tracking-[0.25em] text-muted">
                {item.period}
              </span>
              <h3 className="mt-5 text-2xl text-text-primary md:text-3xl">
                {item.degree}
              </h3>
              <p className="mt-2 font-display text-xl italic text-text-primary/80">
                {item.field}
              </p>
              <p className="mt-4 text-sm text-muted">{item.school}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
