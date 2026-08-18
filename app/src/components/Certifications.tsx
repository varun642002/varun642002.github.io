import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { certifications } from "../lib/site";
import SectionHeader from "./SectionHeader";

export default function Certifications() {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="certifications" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Professional Development"
          title="Certifications &"
          italicWord="credentials"
          subtext="Continuous learning across artificial intelligence, machine learning, statistics, finance, management and governance."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (i % 2) * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group flex flex-col rounded-3xl border border-stroke bg-surface p-6 transition-colors duration-500 hover:border-white/20 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-stroke bg-bg text-sm text-text-primary">
                  {cert.badge}
                </span>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
                  <span>{cert.year}</span>
                  <span className="font-display text-xl italic normal-case tracking-normal">
                    {cert.no}
                  </span>
                </div>
              </div>

              <h3 className="mt-5 text-lg leading-snug text-text-primary md:text-xl">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{cert.issuer}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {cert.body}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stroke px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-stroke pt-5">
                <button
                  onClick={() => setPreview(`/certificates/${cert.code}.jpeg`)}
                  className="rounded-full border border-stroke px-4 py-2 text-xs text-text-primary transition-colors duration-200 hover:border-white/25 hover:bg-stroke/40"
                >
                  View certificate
                </button>
                <a
                  href={`https://coursera.org/verify/${cert.code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors duration-200 hover:text-text-primary"
                >
                  Verify credential
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-bg/90 p-6 backdrop-blur-xl"
          >
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              src={preview}
              alt="Certificate"
              className="max-h-[85vh] max-w-[92vw] rounded-2xl border border-stroke"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
