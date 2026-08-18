import { useEffect, useState } from "react";
import { site } from "../lib/site";

const LINKS = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Work", target: "work" },
  { label: "Resume", target: "resume" },
];

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
      const offset = window.scrollY + window.innerHeight * 0.4;
      const current = ["work", "about"].find((id) => {
        const el = document.getElementById(id);
        return el && offset >= el.offsetTop;
      });
      setActive(current ?? "home");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
            window.scrollTo({ top: 0, behavior: "smooth" });
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

        {LINKS.map((link) =>
          link.target === "resume" ? (
            <a
              key={link.label}
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-2.5 py-1.5 text-xs text-muted transition-colors duration-200 hover:bg-stroke/50 hover:text-text-primary sm:px-4 sm:py-2 sm:text-sm"
            >
              {link.label}
            </a>
          ) : (
            <button
              key={link.label}
              onClick={() =>
                link.target === "home"
                  ? window.scrollTo({ top: 0, behavior: "smooth" })
                  : scrollToSection(link.target)
              }
              className={`rounded-full px-2.5 py-1.5 text-xs transition-colors duration-200 sm:px-4 sm:py-2 sm:text-sm ${
                active === link.target
                  ? "bg-stroke/50 text-text-primary"
                  : "text-muted hover:bg-stroke/50 hover:text-text-primary"
              }`}
            >
              {link.label}
            </button>
          )
        )}

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <a
          href={`mailto:${site.email}`}
          className="group relative rounded-full text-xs sm:text-sm"
        >
          <span className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ inset: "-2px" }} />
          <span className="relative flex items-center gap-1 rounded-full bg-surface px-3.5 py-1.5 text-text-primary backdrop-blur-md sm:px-4 sm:py-2">
            Say hi <span aria-hidden>↗</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
