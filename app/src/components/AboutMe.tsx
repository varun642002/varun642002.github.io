import type React from "react";
import FadeIn from "./FadeIn";
import AnimatedText from "./jack/AnimatedText";
import { about } from "../lib/site";

const CORNERS = [
  {
    src: "/art/corner-moon.svg",
    position: "top-[4%] left-[1%] sm:left-[2%] md:left-[4%]",
    size: "w-[120px] sm:w-[160px] md:w-[210px]",
    delay: 0.1,
    x: -80,
  },
  {
    src: "/art/corner-prism.svg",
    position: "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]",
    size: "w-[100px] sm:w-[140px] md:w-[180px]",
    delay: 0.25,
    x: -80,
  },
  {
    src: "/art/corner-blocks.svg",
    position: "top-[4%] right-[1%] sm:right-[2%] md:right-[4%]",
    size: "w-[120px] sm:w-[160px] md:w-[210px]",
    delay: 0.15,
    x: 80,
  },
  {
    src: "/art/corner-cluster.svg",
    position: "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]",
    size: "w-[130px] sm:w-[170px] md:w-[220px]",
    delay: 0.3,
    x: 80,
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 font-kanit sm:px-8 md:px-10"
      style={{ background: "#0C0C0C" }}
    >
      {CORNERS.map((corner) => (
        <FadeIn
          key={corner.src}
          as="img"
          src={corner.src}
          alt=""
          loading="lazy"
          aria-hidden
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            // Remote decoration — if the host is gone, drop it silently.
            e.currentTarget.style.display = "none";
          }}
          delay={corner.delay}
          duration={0.9}
          x={corner.x}
          y={0}
          className={`pointer-events-none absolute z-0 h-auto select-none ${corner.position} ${corner.size}`}
        />
      ))}

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </FadeIn>

          <AnimatedText
            text={about.paragraph}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />
        </div>

        <FadeIn delay={0.3} y={20}>
          <a
            href="#contact"
            className="inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-opacity duration-200 hover:opacity-90 active:opacity-75 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
            style={{
              background:
                "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
              boxShadow:
                "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
              outline: "2px solid #E3E3E3",
              outlineOffset: "-3px",
            }}
          >
            Contact Me
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
