import { useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [showSections, setShowSections] = useState(false);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gta-dark">
      <HeroSection
        onAnimationEnd={() => setShowSections(true)}
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      {showSections && (
        <>
          <About aboutRef={aboutRef} />
          <Projects projectsRef={projectsRef} />
          <Contact contactRef={contactRef} />
        </>
      )}
    </div>
  );
}
