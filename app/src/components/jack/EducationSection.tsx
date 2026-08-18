import FadeIn from "../FadeIn";
import { education } from "../../lib/site";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: "#0C0C0C" }}
    >
      <h2
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Education
      </h2>

      <div className="mx-auto flex max-w-5xl flex-col gap-5 md:flex-row md:gap-6">
        {education.map((item, i) => (
          <FadeIn
            key={item.degree}
            delay={i * 0.1}
            className="flex flex-1 flex-col gap-4 rounded-[40px] border-2 border-[#D7E2EA]/30 p-7 sm:rounded-[50px] md:p-10"
          >
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 sm:text-sm">
              {item.period}
            </span>
            <h3
              className="font-medium uppercase leading-tight text-[#D7E2EA]"
              style={{ fontSize: "clamp(1.1rem, 2.4vw, 2.1rem)" }}
            >
              {item.degree}
            </h3>
            <p
              className="font-light uppercase tracking-wide text-[#D7E2EA]/80"
              style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.3rem)" }}
            >
              {item.field}
            </p>
            <p className="text-sm font-light text-[#D7E2EA]/70">{item.school}</p>
            <p
              className="font-light leading-relaxed text-[#D7E2EA]"
              style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)", opacity: 0.6 }}
            >
              {item.body}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
