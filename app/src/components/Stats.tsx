import { motion } from "framer-motion";
import { stats } from "../lib/site";

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 border-t border-stroke pt-12 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-center sm:text-left"
            >
              <p className="font-display text-5xl italic text-text-primary md:text-6xl lg:text-7xl">
                {stat.value}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
