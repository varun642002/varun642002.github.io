import { useEffect } from "react";
import HeroSection from "../components/jack/HeroSection";
import MarqueeSection from "../components/jack/MarqueeSection";
import AboutSection from "../components/jack/AboutSection";
import ServicesSection from "../components/jack/ServicesSection";
import ProjectsSection from "../components/jack/ProjectsSection";

export default function Jack() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Varun S. — Data Analyst";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div
      className="font-kanit"
      style={{ background: "#0C0C0C", overflowX: "clip" }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}
