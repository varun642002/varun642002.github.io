import { useEffect } from "react";
import HeroSection from "../components/studio/HeroSection";
import AboutSection from "../components/studio/AboutSection";
import ServicesSection from "../components/studio/ServicesSection";
import ProjectsSection from "../components/studio/ProjectsSection";
import SkillsSection from "../components/studio/SkillsSection";
import ExperienceSection from "../components/studio/ExperienceSection";
import AchievementsSection from "../components/studio/AchievementsSection";
import EducationSection from "../components/studio/EducationSection";
import CertificationsSection from "../components/studio/CertificationsSection";
import ContactSection from "../components/studio/ContactSection";
import StudioMenu from "../components/studio/StudioMenu";

export default function Studio() {
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
      <StudioMenu />
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
