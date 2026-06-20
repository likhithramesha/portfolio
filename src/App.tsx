import { AboutSection } from "./components/AboutSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { MarqueeSection } from "./components/MarqueeSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <a className="skip-link" href="#projects">
        Skip to projects
      </a>
      <HeroSection />
      <main>
        <MarqueeSection />
        <AboutSection />
        <CapabilitiesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
