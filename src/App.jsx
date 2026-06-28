import { useMemo, useRef } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import ResumeSection from "./components/ResumeSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function Portfolio() {
  const { theme } = useTheme();

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

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen ${theme.pageBg}`}>
      <Navbar scrollToSection={scrollToSection} sectionRefs={sectionRefs} />

      <HeroSection />

      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Research researchRef={researchRef} />
      <Experience experienceRef={experienceRef} />
      <Blog blogRef={blogRef} />
      <ResumeSection resumeRef={resumeRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
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
