import FadeIn from "../FadeIn";
import { achievements } from "../../lib/site";

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative z-0 rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: "#FFFFFF" }}
    >
      <h2
        className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Achievements
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px md:grid-cols-2">
        {achievements.map((item, i) => (
          <FadeIn
            key={item.title}
            delay={(i % 2) * 0.1}
            className="flex flex-col gap-4 p-6 sm:p-8 md:p-10"
            style={{ outline: "1px solid rgba(12, 12, 12, 0.15)" }}
          >
            <span className="text-xs uppercase tracking-widest text-[#0C0C0C]/50 sm:text-sm">
              {item.tag}
            </span>
            <h3
              className="font-medium uppercase leading-tight text-[#0C0C0C]"
              style={{ fontSize: "clamp(1rem, 2.2vw, 1.9rem)" }}
            >
              {item.title}
            </h3>
            <p
              className="font-light leading-relaxed text-[#0C0C0C]"
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
