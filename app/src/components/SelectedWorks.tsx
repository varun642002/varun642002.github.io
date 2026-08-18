import { motion } from "framer-motion";
import { site, works } from "../lib/site";
import SectionHeader from "./SectionHeader";

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured"
          italicWord="projects"
          subtext="A selection of projects I've worked on, from raw extract to the decision it supports."
          action={{ label: "View all work", href: site.socials[0].href }}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {works.map((work, i) => {
            const Card = work.href ? motion.a : motion.div;
            return (
              <Card
                key={work.title}
                {...(work.href
                  ? { href: work.href, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.9,
                  delay: (i % 2) * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`group relative block overflow-hidden rounded-3xl border border-stroke bg-surface ${work.span} ${work.aspect}`}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="halftone pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply" />

                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-bg/60 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted backdrop-blur-md">
                  {work.kind}
                </span>

                <span className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                  <span className="relative rounded-full p-[1.5px]">
                    <span className="accent-gradient-animated absolute inset-0 rounded-full" />
                    <span className="relative block rounded-full bg-white px-5 py-2.5 text-sm text-black">
                      View — <span className="font-display italic">{work.title}</span>
                    </span>
                  </span>
                </span>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
