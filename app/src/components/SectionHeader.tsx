import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  italicWord: string;
  subtext: string;
  action?: { label: string; href: string };
};

export default function SectionHeader({
  eyebrow,
  title,
  italicWord,
  subtext,
  action,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            {eyebrow}
          </span>
        </div>
        <h2 className="mb-4 text-4xl leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
          {title} <span className="font-display italic">{italicWord}</span>
        </h2>
        <p className="max-w-md text-sm text-muted md:text-base">{subtext}</p>
      </div>

      {action && (
        <a
          href={action.href}
          target={action.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group relative hidden rounded-full text-sm md:inline-flex"
        >
          <span
            className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ inset: "-2px" }}
          />
          <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-6 py-3 text-text-primary transition-colors duration-300 group-hover:border-transparent">
            {action.label}
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </span>
        </a>
      )}
    </motion.div>
  );
}
