import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "../config/portfolioData";
import { useTheme } from "../context/ThemeContext";

export default function Projects({ projectsRef }) {
  const { theme } = useTheme();
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    setCanScrollLeft(slider.scrollLeft > 8);
    setCanScrollRight(
      slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 8,
    );
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector("article");
    const gap = 32;
    const distance = (card?.offsetWidth ?? 320) + gap;

    slider.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <section
      ref={projectsRef}
      className="relative px-6 py-20 sm:px-10 lg:px-20"
      id="projects"
    >
      <div className={`absolute inset-0 ${theme.sectionOverlay}`} />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <motion.h2
            className={`font-display text-5xl tracking-wider sm:text-6xl ${theme.heading}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous project"
              disabled={!canScrollLeft}
              onClick={() => scrollSlider(-1)}
              className={`flex h-10 w-10 items-center justify-center rounded-sm border transition-all disabled:cursor-not-allowed disabled:opacity-30 ${theme.sliderBtn}`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next project"
              disabled={!canScrollRight}
              onClick={() => scrollSlider(1)}
              className={`flex h-10 w-10 items-center justify-center rounded-sm border transition-all disabled:cursor-not-allowed disabled:opacity-30 ${theme.sliderBtn}`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative -mx-2">
          <div
            ref={sliderRef}
            onScroll={updateScrollState}
            className="project-slider flex snap-x snap-mandatory gap-8 overflow-x-auto px-2 pb-4"
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className={`${theme.projectCard} w-[min(100%,20rem)] shrink-0 snap-center sm:w-80`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className={`mb-3 ${theme.projectTitle}`}>{project.title}</h3>
                <p className={`mb-5 flex-1 text-sm leading-relaxed ${theme.muted}`}>
                  {project.description}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={theme.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block text-sm font-emphasis ${theme.projectLink}`}
                >
                  View Project →
                </a>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2 sm:hidden">
          <button
            type="button"
            aria-label="Previous project"
            disabled={!canScrollLeft}
            onClick={() => scrollSlider(-1)}
            className={`flex h-10 w-10 items-center justify-center rounded-sm border transition-all disabled:cursor-not-allowed disabled:opacity-30 ${theme.sliderBtn}`}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next project"
            disabled={!canScrollRight}
            onClick={() => scrollSlider(1)}
            className={`flex h-10 w-10 items-center justify-center rounded-sm border transition-all disabled:cursor-not-allowed disabled:opacity-30 ${theme.sliderBtn}`}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
