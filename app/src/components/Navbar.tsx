import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../lib/site";

// Every section, in document order — the overlay menu lists all of them, the
// pill only has room for the first few.
export const SECTIONS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Achievements", id: "achievements" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

const PILL_LINKS = ["home", "about", "work"];

export function scrollToSection(id: string) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);

      // Last section whose top has passed 40% of the viewport wins.
      const offset = window.scrollY + window.innerHeight * 0.4;
      const current = [...SECTIONS]
        .reverse()
        .find(({ id }) => {
          const el = document.getElementById(id);
          return el && offset >= el.offsetTop;
        });
      setActive(current?.id ?? "home");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The overlay covers the page, so keep the page still while it is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    // Let the overlay release the scroll lock before scrolling.
    window.setTimeout(() => scrollToSection(id), 60);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
        <nav
          className={`inline-flex items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md transition-shadow duration-300 ${
            scrolled ? "shadow-md shadow-black/10" : ""
          }`}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            aria-label="Back to top"
            className="group relative flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
          >
            <span className="accent-gradient absolute inset-0 rounded-full transition-transform duration-500 group-hover:rotate-180" />
            <span className="absolute inset-[1.5px] flex items-center justify-center rounded-full bg-bg font-display text-[13px] italic text-text-primary">
              {site.initials}
            </span>
          </a>

          <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

          {SECTIONS.filter((s) => PILL_LINKS.includes(s.id)).map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`rounded-full px-2.5 py-1.5 text-xs transition-colors duration-200 sm:px-4 sm:py-2 sm:text-sm ${
                active === link.id
                  ? "bg-stroke/50 text-text-primary"
                  : "text-muted hover:bg-stroke/50 hover:text-text-primary"
              }`}
            >
              {link.label}
            </button>
          ))}

          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-2.5 py-1.5 text-xs text-muted transition-colors duration-200 hover:bg-stroke/50 hover:text-text-primary sm:block sm:px-4 sm:py-2 sm:text-sm"
          >
            Resume
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex items-center gap-2 rounded-full px-2.5 py-1.5 text-xs text-muted transition-colors duration-200 hover:bg-stroke/50 hover:text-text-primary sm:px-4 sm:py-2 sm:text-sm"
          >
            <span className="flex flex-col gap-[3px]" aria-hidden>
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </span>
            <span className="hidden sm:inline">Menu</span>
          </button>

          <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

          <a
            href={`mailto:${site.email}`}
            className="group relative rounded-full text-xs sm:text-sm"
          >
            <span
              className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ inset: "-2px" }}
            />
            <span className="relative flex items-center gap-1 rounded-full bg-surface px-3.5 py-1.5 text-text-primary backdrop-blur-md sm:px-4 sm:py-2">
              Say hi <span aria-hidden>↗</span>
            </span>
          </a>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[80] flex flex-col bg-bg/95 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between px-6 pt-6 md:px-12 md:pt-10">
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                Navigation
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="rounded-full border border-stroke px-4 py-2 text-xs text-muted transition-colors duration-200 hover:border-white/25 hover:text-text-primary"
              >
                Close ✕
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-6 md:px-12">
              {SECTIONS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05 + i * 0.04,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onClick={() => go(link.id)}
                  className="group flex items-baseline gap-4 py-1.5 text-left md:gap-6"
                >
                  <span className="w-8 text-xs text-muted md:w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-3xl italic transition-colors duration-200 md:text-5xl ${
                      active === link.id
                        ? "text-text-primary"
                        : "text-muted group-hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </nav>

            <div className="flex flex-wrap items-center gap-6 border-t border-stroke px-6 py-6 md:px-12">
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors duration-200 hover:text-text-primary"
              >
                Resume ↗
              </a>
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors duration-200 hover:text-text-primary"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
