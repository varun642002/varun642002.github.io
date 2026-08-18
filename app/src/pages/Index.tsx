import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import SelectedWorks from "../components/SelectedWorks";
import Journal from "../components/Journal";
import Explorations from "../components/Explorations";
import Stats from "../components/Stats";
import ContactFooter from "../components/ContactFooter";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  // Hold the page still until the counter finishes, so the GSAP hero entrance
  // is not scrolled past before it plays.
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  // ScrollTrigger measured the page while the body was locked, so its start /
  // end values are stale by the time the page can actually scroll.
  useEffect(() => {
    if (isLoading) return;
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => window.clearTimeout(id);
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <SelectedWorks />
        <Journal />
        <Explorations />
        <Stats />
      </main>
      <ContactFooter />
    </>
  );
}
