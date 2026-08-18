import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { explorations } from "../lib/site";

gsap.registerPlugin(ScrollTrigger);

const LEFT = explorations.slice(0, 3);
const RIGHT = explorations.slice(3);

export default function Explorations() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // The heading stays put while the two columns drift past it.
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      const scrub = {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      };

      gsap.fromTo(leftRef.current, { y: 120 }, { y: -220, ease: "none", scrollTrigger: scrub });
      gsap.fromTo(rightRef.current, { y: -80 }, { y: -420, ease: "none", scrollTrigger: scrub });
    }, sectionRef);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener("load", onLoad);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const column = (items: string[], ref: React.RefObject<HTMLDivElement>, tilt: number) => (
    <div ref={ref} className="flex flex-col items-center gap-12 md:gap-24">
      {items.map((src, i) => (
        <button
          key={src}
          onClick={() => setLightbox(src)}
          style={{ rotate: `${i % 2 === 0 ? tilt : -tilt}deg` }}
          className="group w-full max-w-[320px] overflow-hidden rounded-3xl border border-stroke bg-surface transition-transform duration-500 hover:!rotate-0 hover:scale-[1.03]"
        >
          <span className="relative block aspect-square">
            <img
              src={src}
              alt="Exploration"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="halftone pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply" />
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative min-h-[300vh] bg-bg"
    >
      <div
        ref={contentRef}
        className="pointer-events-none relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center"
      >
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            Explorations
          </span>
          <span className="h-px w-8 bg-stroke" />
        </div>
        <h2 className="mb-4 text-4xl leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
          Visual <span className="font-display italic">playground</span>
        </h2>
        <p className="mb-8 max-w-sm text-sm text-muted md:text-base">
          Chart studies and layout experiments — the sketches behind the dashboards.
        </p>
        <a
          href="https://github.com/varun642002"
          target="_blank"
          rel="noopener noreferrer"
          className="group pointer-events-auto relative rounded-full text-sm"
        >
          <span
            className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ inset: "-2px" }}
          />
          <span className="relative block rounded-full border border-stroke bg-surface px-6 py-3 text-text-primary transition-colors duration-300 group-hover:border-transparent">
            More on GitHub ↗
          </span>
        </a>
      </div>

      <div className="absolute inset-0 z-20 flex items-start justify-center px-6 pt-[30vh]">
        <div className="grid w-full max-w-[1400px] grid-cols-2 gap-12 md:gap-40">
          {column(LEFT, leftRef, 3)}
          {column(RIGHT, rightRef, 4)}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-bg/90 p-6 backdrop-blur-xl"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              src={lightbox}
              alt="Exploration"
              className="max-h-[80vh] max-w-[90vw] rounded-3xl border border-stroke"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
