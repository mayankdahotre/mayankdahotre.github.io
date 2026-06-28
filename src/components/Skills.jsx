import { motion } from "framer-motion";
import { techStack } from "../config/portfolioData";
import { useTheme } from "../context/ThemeContext";

export default function Skills({ skillsRef }) {
  const { theme } = useTheme();

  return (
    <section
      ref={skillsRef}
      className="relative px-6 py-20 sm:px-10 lg:px-20"
      id="skills"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className={`mb-8 font-display text-5xl tracking-wider sm:text-6xl ${theme.heading}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3
            className={`mb-4 font-display text-2xl tracking-wider ${theme.subheading}`}
          >
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((skill) => (
              <span key={skill} className={theme.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
