import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { LiveProjectButton } from "./Buttons";
import { works } from "../../lib/site";

// Three images per card: the project's own artwork plus two studies, so the
// grid stays full without inventing screenshots that do not exist.
const FILLER = [
  "/art/explore-01.svg",
  "/art/explore-02.svg",
  "/art/explore-03.svg",
  "/art/explore-04.svg",
  "/art/explore-05.svg",
  "/art/explore-06.svg",
];

const PROJECTS = works.map((work, i) => ({
  no: work.no,
  name: work.title,
  category: work.kind,
  href: work.href || "/#work",
  linkLabel: work.href ? work.linkLabel : "View Details",
  images: [work.image, FILLER[i % FILLER.length], FILLER[(i + 3) % FILLER.length]],
}));

const RADIUS = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";

function Card({
  project,
  index,
  total,
  progress,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Cards behind the top of the stack settle a little smaller, so the pile
  // reads as depth rather than a flat swap.
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.article
        style={{ scale, top: `${index * 28}px` }}
        className={`relative w-full border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 ${RADIUS}`}
      >
        <div style={{ background: "#0C0C0C" }} className={`absolute inset-0 -z-10 ${RADIUS}`} />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-8">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
            >
              {project.no}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.href} label={project.linkLabel} />
        </div>

        <div className="mt-4 flex gap-3 sm:mt-6 md:gap-4">
          <div className="flex w-[40%] flex-col gap-3 md:gap-4">
            <img
              src={project.images[0]}
              alt=""
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.images[1]}
              alt=""
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>

          <div className="w-[60%]">
            <img
              src={project.images[2]}
              alt=""
              loading="lazy"
              className={`h-full w-full object-cover ${RADIUS}`}
              style={{ minHeight: "clamp(305px, 40vw, 590px)" }}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{ background: "#0C0C0C" }}
    >
      <h2
        className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16 md:mb-20"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </h2>

      <div ref={containerRef} className="mx-auto max-w-6xl">
        {PROJECTS.map((project, i) => (
          <Card
            key={project.no}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
