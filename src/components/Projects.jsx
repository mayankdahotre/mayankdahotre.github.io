import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio with smooth animations, dual themes, and a luxury gold marble hero.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    title: "Task Manager App",
    description:
      "Full-stack task management app with drag-and-drop boards, real-time updates, and user auth.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Clean weather dashboard pulling live data from OpenWeather API with location search and forecasts.",
    tags: ["JavaScript", "API", "CSS"],
    link: "#",
  },
];

export default function Projects({ projectsRef }) {
  const { theme } = useTheme();

  return (
    <section
      ref={projectsRef}
      className="relative px-6 py-24 sm:px-10 lg:px-20"
      id="projects"
    >
      <div className={`absolute inset-0 ${theme.sectionOverlay}`} />

      <div className="relative mx-auto max-w-5xl">
        <motion.h2
          className={`mb-12 font-[family-name:var(--font-display)] text-5xl tracking-wider sm:text-6xl ${theme.heading}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={theme.projectCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
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
              <a href={project.link} className={`inline-block text-sm font-medium ${theme.projectLink}`}>
                View Project →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
