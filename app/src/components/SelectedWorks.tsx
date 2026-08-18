import { motion } from "framer-motion";
import { site, works } from "../lib/site";
import type { Work } from "../lib/site";
import SectionHeader from "./SectionHeader";

function Card({ work, index }: { work: Work; index: number }) {
  const body = (
    <>
      <div className={`relative overflow-hidden ${work.aspect}`}>
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
        <span className="absolute right-5 top-5 font-display text-2xl italic text-white/70">
          {work.no}
        </span>

        {work.href && (
          <span className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
            <span className="relative rounded-full p-[1.5px]">
              <span className="accent-gradient-animated absolute inset-0 rounded-full" />
              <span className="relative block rounded-full bg-white px-5 py-2.5 text-sm text-black">
                View — <span className="font-display italic">{work.title}</span>
              </span>
            </span>
          </span>
        )}
      </div>

      <div className="p-6 md:p-7">
        <h3 className="text-xl text-text-primary md:text-2xl">{work.title}</h3>
        <p className="mt-1 text-sm text-muted">{work.subtitle}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{work.body}</p>

        {work.stats && (
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-stroke pt-5 sm:grid-cols-4">
            {work.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl italic text-text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-stroke px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {work.href && (
          <span className="mt-6 inline-flex items-center gap-2 text-sm text-text-primary transition-colors duration-200 group-hover:text-[#89AACC]">
            {work.linkLabel}
            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            >
              ↗
            </span>
          </span>
        )}
      </div>
    </>
  );

  const className = `group flex flex-col overflow-hidden rounded-3xl border border-stroke bg-surface transition-colors duration-500 hover:border-white/20 ${work.span}`;
  const animation = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: {
      duration: 0.9,
      delay: (index % 2) * 0.1,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  };

  return work.href ? (
    <motion.a
      {...animation}
      href={work.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {body}
    </motion.a>
  ) : (
    <motion.div {...animation} className={className}>
      {body}
    </motion.div>
  );
}

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured"
          italicWord="projects"
          subtext="Projects across data analytics, business intelligence, AI-powered applications, research and engineering."
          action={{ label: "View all work", href: site.socials[0].href }}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {works.map((work, i) => (
            <Card key={work.no} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
