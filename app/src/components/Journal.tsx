import { motion } from "framer-motion";
import { journal } from "../lib/site";
import SectionHeader from "./SectionHeader";

export default function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Journal"
          title="Recent"
          italicWord="thoughts"
          subtext="Notes on the analytics work — what the model said, and what I did about it."
          action={{ label: "View all", href: "#journal" }}
        />

        <div className="flex flex-col gap-4">
          {journal.map((entry, i) => (
            <motion.article
              key={entry.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group flex cursor-pointer items-center gap-4 rounded-[40px] border border-stroke bg-surface/30 p-4 transition-colors duration-300 hover:bg-surface sm:gap-6 sm:rounded-full"
            >
              <img
                src={entry.image}
                alt=""
                loading="lazy"
                className="h-16 w-16 flex-shrink-0 rounded-full object-cover sm:h-20 sm:w-20"
              />

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-base text-text-primary md:text-lg">
                  {entry.title}
                </h3>
                <p className="mt-1 text-xs text-muted">
                  {entry.read} · {entry.date}
                </p>
              </div>

              <span className="mr-2 hidden text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-text-primary sm:block" aria-hidden>
                →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
