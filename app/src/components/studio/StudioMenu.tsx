import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// The hero nav only has room for four links, so every section lives here.
const SECTIONS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Achievements", id: "achievements" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export default function StudioMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    // Let the overlay release the scroll lock before scrolling.
    window.setTimeout(() => {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-[70] flex items-center gap-2.5 rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] backdrop-blur-md transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:bottom-8 sm:right-8 sm:px-6 sm:py-3 sm:text-sm"
        style={{ background: "rgba(12, 12, 12, 0.7)" }}
      >
        <span className="flex flex-col gap-[3px]" aria-hidden>
          <span className="block h-px w-4 bg-current" />
          <span className="block h-px w-4 bg-current" />
        </span>
        Menu
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[90] flex flex-col backdrop-blur-2xl"
            style={{ background: "rgba(12, 12, 12, 0.97)" }}
          >
            <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 sm:text-sm">
                Navigation
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-full border-2 border-[#D7E2EA] px-5 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:text-sm"
              >
                Close ✕
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-0.5 px-6 md:px-10">
              {SECTIONS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05 + i * 0.035,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onClick={() => go(item.id)}
                  className="group flex items-baseline gap-4 py-1 text-left md:gap-8"
                >
                  <span className="w-7 text-xs uppercase tracking-widest text-[#D7E2EA]/40 md:w-10 md:text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-black uppercase leading-none tracking-tight text-[#D7E2EA]/70 transition-colors duration-200 group-hover:text-[#D7E2EA]"
                    style={{ fontSize: "clamp(1.6rem, 5.5vw, 4rem)" }}
                  >
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
