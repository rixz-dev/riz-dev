import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StackSection from "./components/StackSection";
import ProjectsSection from "./components/ProjectsSection";
import SupportSection from "./components/SupportSection";
import ContactSection from "./components/ContactSection";
import NavBar from "./components/NavBar";

const sections = ["hero", "about", "stack", "projects", "support", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="chromatic-bg relative min-h-screen overflow-x-hidden">
      <NavBar activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div id="hero"><HeroSection /></div>
      <div id="about"><AboutSection /></div>
      <div id="stack"><StackSection /></div>
      <div id="projects"><ProjectsSection /></div>
      <div id="support"><SupportSection /></div>
      <div id="contact"><ContactSection /></div>
    </div>
  );
}
