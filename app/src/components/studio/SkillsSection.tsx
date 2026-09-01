import FadeIn from "../FadeIn";
import { skills } from "../../lib/site";

// The white block that used to be "Services". It reads as a capability list
// either way, and the numbered layout carries more weight than the dark grid
// this section replaced.
export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-0 rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: "#FFFFFF" }}
    >
      <h2
        className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Skills
      </h2>

      <div className="mx-auto max-w-5xl">
        {skills.map((skill, i) => (
          <FadeIn
            key={skill.no}
            delay={Math.min(i, 4) * 0.08}
            className="flex items-start gap-5 py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
            style={{
              borderTop: i === 0 ? "1px solid rgba(12, 12, 12, 0.15)" : undefined,
              borderBottom: "1px solid rgba(12, 12, 12, 0.15)",
            }}
          >
            <span
              className="shrink-0 font-black leading-none text-[#0C0C0C]"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {skill.no}
            </span>

            <div className="flex flex-col gap-3 pt-1 md:gap-4">
              <h3
                className="font-medium uppercase leading-tight text-[#0C0C0C]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {skill.title}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                style={{
                  fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                  opacity: 0.6,
                }}
              >
                {skill.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
