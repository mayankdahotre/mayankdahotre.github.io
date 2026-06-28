import { motion } from "framer-motion";
import { experience } from "../config/portfolioData";
import { useTheme } from "../context/ThemeContext";

export default function Experience({ experienceRef }) {
  const { theme } = useTheme();

  return (
    <section
      ref={experienceRef}
      className="relative px-6 py-20 sm:px-10 lg:px-20"
      id="experience"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className={`mb-10 font-display text-5xl tracking-wider sm:text-6xl ${theme.heading}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              className={theme.projectCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className={`text-xl ${theme.projectTitle}`}>{item.role}</h3>
                <span className={`text-sm ${theme.muted}`}>{item.period}</span>
              </div>
              <p className={`mb-2 text-sm font-emphasis ${theme.accent}`}>
                {item.company}
              </p>
              <p className={`text-sm leading-relaxed ${theme.muted}`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
