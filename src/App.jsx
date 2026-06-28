import { useEffect, useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function Portfolio() {
  const { theme, themeId } = useTheme();
  const [gtaAnimationDone, setGtaAnimationDone] = useState(false);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setGtaAnimationDone(false);
  }, [themeId]);

  const showSections = themeId === "luxury" || gtaAnimationDone;

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen ${theme.pageBg}`}>
      <HeroSection
        key={themeId}
        onAnimationEnd={() => setGtaAnimationDone(true)}
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

      <ThemeToggle />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
