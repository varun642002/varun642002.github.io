import FadeIn from "../FadeIn";
import { ContactButton, LiveProjectButton } from "./Buttons";
import { site } from "../../lib/site";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-5 pb-12 pt-20 sm:px-8 sm:pt-24 md:px-10 md:pt-32"
      style={{ background: "#0C0C0C" }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Contact
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.15}
        y={20}
        className="mx-auto mt-8 max-w-xl text-center font-light leading-relaxed text-[#D7E2EA] md:mt-12"
        style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.25rem)", opacity: 0.7 }}
      >
        {site.contactLine}
      </FadeIn>

      <FadeIn
        delay={0.3}
        y={20}
        className="mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-14"
      >
        <ContactButton href={`mailto:${site.email}`} />
        {site.socials
          .filter((social) => social.href.startsWith("http"))
          .map((social) => (
            <LiveProjectButton
              key={social.label}
              href={social.href}
              label={social.label}
            />
          ))}
        <LiveProjectButton href={site.resume} label="Resume" />
      </FadeIn>

      <div
        className="mt-16 flex flex-col items-center gap-4 pt-8 text-xs uppercase tracking-widest text-[#D7E2EA]/50 sm:flex-row sm:justify-between md:mt-24"
        style={{ borderTop: "1px solid rgba(215, 226, 234, 0.15)" }}
      >
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <a href="/" className="transition-opacity duration-200 hover:opacity-70">
          Main portfolio ↗
        </a>
      </div>
    </section>
  );
}
