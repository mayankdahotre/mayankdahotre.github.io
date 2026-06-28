import { motion } from "framer-motion";
import { publications } from "../config/portfolioData";
import { useTheme } from "../context/ThemeContext";

export default function Research({ researchRef }) {
  const { theme } = useTheme();

  return (
    <section
      ref={researchRef}
      className="relative px-6 py-20 sm:px-10 lg:px-20"
      id="research"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className={`mb-8 font-display text-5xl tracking-wider sm:text-6xl ${theme.heading}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Research
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3
            className={`mb-6 font-display text-2xl tracking-wider ${theme.subheading}`}
          >
            Publications
          </h3>
          <div className="space-y-5">
            {publications.map((pub, index) => (
              <motion.article
                key={pub.title}
                className={theme.projectCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className={`mb-1 text-lg font-display ${theme.projectTitle}`}>
                  {pub.title}
                </h4>
                <p className={`mb-2 text-sm ${theme.accent}`}>{pub.venue}</p>
                <p className={`mb-3 text-sm leading-relaxed ${theme.muted}`}>
                  {pub.description}
                </p>
                <a href={pub.link} className={`text-sm font-emphasis ${theme.projectLink}`}>
                  Read paper →
                </a>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
