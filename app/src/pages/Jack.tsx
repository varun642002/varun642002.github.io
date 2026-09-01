import { useEffect } from "react";
import HeroSection from "../components/jack/HeroSection";
import AboutSection from "../components/jack/AboutSection";
import ServicesSection from "../components/jack/ServicesSection";
import ProjectsSection from "../components/jack/ProjectsSection";
import SkillsSection from "../components/jack/SkillsSection";
import ExperienceSection from "../components/jack/ExperienceSection";
import AchievementsSection from "../components/jack/AchievementsSection";
import EducationSection from "../components/jack/EducationSection";
import CertificationsSection from "../components/jack/CertificationsSection";
import ContactSection from "../components/jack/ContactSection";
import JackMenu from "../components/jack/JackMenu";

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
      <JackMenu />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}
