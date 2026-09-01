import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "../FadeIn";
import { certifications } from "../../lib/site";

export default function CertificationsSection() {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="certifications"
      className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      style={{ background: "#0C0C0C" }}
    >
      <h2
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Certifications
      </h2>

      <div className="mx-auto max-w-5xl">
        {certifications.map((cert, i) => (
          <FadeIn
            key={cert.code}
            delay={(i % 2) * 0.08}
            className="flex flex-col gap-5 py-8 sm:flex-row sm:items-start sm:gap-8 sm:py-10 md:gap-12 md:py-12"
            style={{
              borderTop: i === 0 ? "1px solid rgba(215, 226, 234, 0.15)" : undefined,
              borderBottom: "1px solid rgba(215, 226, 234, 0.15)",
            }}
          >
            <span
              className="shrink-0 font-black leading-none text-[#D7E2EA]/25"
              style={{ fontSize: "clamp(2.5rem, 7vw, 90px)" }}
            >
              {cert.no}
            </span>

            <div className="flex flex-1 flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 sm:text-sm">
                {cert.year} — {cert.issuer}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 1.9rem)" }}
              >
                {cert.title}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed text-[#D7E2EA]"
                style={{
                  fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)",
                  opacity: 0.6,
                }}
              >
                {cert.body}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setPreview(`/certificates/${cert.code}.jpeg`)}
                  className="rounded-full border-2 border-[#D7E2EA] px-6 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:text-sm"
                >
                  View certificate
                </button>
                <a
                  href={`https://coursera.org/verify/${cert.code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 transition-opacity duration-200 hover:opacity-100 sm:text-sm"
                >
                  Verify ↗
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center p-6 backdrop-blur-xl"
            style={{ background: "rgba(12, 12, 12, 0.92)" }}
          >
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              src={preview}
              alt="Certificate"
              className="max-h-[85vh] max-w-[92vw] rounded-[30px] border-2 border-[#D7E2EA]/30"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
