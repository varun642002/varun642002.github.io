import FadeIn from "../FadeIn";
import { experience } from "../../lib/site";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      style={{ background: "#0C0C0C" }}
    >
      <h2
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Experience
      </h2>

      <div className="mx-auto max-w-5xl">
        {experience.map((role, i) => (
          <FadeIn
            key={role.role}
            delay={i * 0.1}
            className="flex flex-col gap-5 py-10 sm:gap-8 sm:py-12 md:flex-row md:gap-12 md:py-14"
            style={{
              borderTop: i === 0 ? "1px solid rgba(215, 226, 234, 0.15)" : undefined,
              borderBottom: "1px solid rgba(215, 226, 234, 0.15)",
            }}
          >
            <div className="flex items-start gap-5 md:w-[38%] md:flex-col md:gap-4">
              <span
                className="font-black leading-none text-[#D7E2EA]/25"
                style={{ fontSize: "clamp(2.5rem, 7vw, 90px)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  className="font-medium uppercase leading-tight text-[#D7E2EA]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 1.9rem)" }}
                >
                  {role.role}
                </h3>
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 sm:text-sm">
                  {role.period}
                </span>
                <span className="text-sm font-light text-[#D7E2EA]/70">
                  {role.org}
                </span>
              </div>
            </div>

            <ul className="flex flex-1 flex-col gap-3">
              {role.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 font-light leading-relaxed text-[#D7E2EA]"
                  style={{
                    fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)",
                    opacity: 0.6,
                  }}
                >
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-[#D7E2EA]" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
