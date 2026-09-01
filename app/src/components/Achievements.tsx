import { motion } from "framer-motion";
import { achievements } from "../lib/site";
import SectionHeader from "./SectionHeader";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Leadership & Recognition"
          title="Achievements &"
          italicWord="awards"
          subtext="National-level engineering competitions, team leadership and the move from engineering into analytics."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative flex flex-col rounded-3xl border border-stroke bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 md:p-7"
            >
              <span className="mb-5 inline-flex w-fit rounded-full border border-stroke px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted">
                {item.tag}
              </span>
              <h3 className="mb-3 text-lg text-text-primary md:text-xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-stroke px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-muted"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
