import { useEffect, useMemo, useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import ResumeSection from "./components/ResumeSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function Portfolio() {
  const { theme, themeId } = useTheme();
  const [gtaAnimationDone, setGtaAnimationDone] = useState(false);

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const researchRef = useRef(null);
  const experienceRef = useRef(null);
  const blogRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = useMemo(
    () => ({
      about: aboutRef,
      skills: skillsRef,
      research: researchRef,
      experience: experienceRef,
      blog: blogRef,
      resume: resumeRef,
      projects: projectsRef,
      contact: contactRef,
    }),
    [],
  );

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
        sectionRefs={sectionRefs}
      />

      {showSections && (
        <>
          <About aboutRef={aboutRef} />
          <Skills skillsRef={skillsRef} />
          <Research researchRef={researchRef} />
          <Experience experienceRef={experienceRef} />
          <Blog blogRef={blogRef} />
          <ResumeSection resumeRef={resumeRef} />
          <Projects projectsRef={projectsRef} />
          <Contact contactRef={contactRef} />
          <Footer />
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
