import FadeIn from "../FadeIn";
import { skills } from "../../lib/site";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      style={{ background: "#0C0C0C" }}
    >
      <h2
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Skills
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px sm:grid-cols-2">
        {skills.map((skill, i) => (
          <FadeIn
            key={skill.no}
            delay={(i % 2) * 0.1}
            className="flex flex-col gap-4 p-6 sm:p-8 md:p-10"
            style={{ outline: "1px solid rgba(215, 226, 234, 0.15)" }}
          >
            <span
              className="font-black leading-none text-[#D7E2EA]/25"
              style={{ fontSize: "clamp(2.5rem, 6vw, 80px)" }}
            >
              {skill.no}
            </span>
            <h3
              className="font-medium uppercase leading-tight text-[#D7E2EA]"
              style={{ fontSize: "clamp(1rem, 2.2vw, 1.9rem)" }}
            >
              {skill.title}
            </h3>
            <p
              className="font-light leading-relaxed text-[#D7E2EA]"
              style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)", opacity: 0.6 }}
            >
              {skill.body}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
