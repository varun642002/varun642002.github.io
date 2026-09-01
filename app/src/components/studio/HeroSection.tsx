import FadeIn from "../FadeIn";
import Magnet from "./Magnet";
import { ContactButton } from "./Buttons";
import { site } from "../../lib/site";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex h-screen flex-col"
      style={{ overflowX: "clip" }}
    >
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex items-center justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
      >
        {NAV.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            {item.label}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]"
        >
          Hi, i&apos;m varun
        </FadeIn>
      </div>

      <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
        >
          a data analyst driven by turning messy data into decisions people act on
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="relative z-20">
          <ContactButton href={`mailto:${site.email}`} />
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 z-10 w-[240px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:w-[300px] sm:translate-y-0 md:w-[360px] lg:w-[420px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src={site.photo}
            alt={`Portrait of ${site.name}`}
            draggable={false}
            className="w-full select-none rounded-[48px] border-2 border-[#D7E2EA]/25 object-cover sm:rounded-b-none"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}
