import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "HTML/CSS",
  "Tailwind CSS",
  "Git",
  "SQL",
];

export default function About({ aboutRef }) {
  const { theme } = useTheme();

  return (
    <section
      ref={aboutRef}
      className="relative px-6 py-24 sm:px-10 lg:px-20"
      id="about"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className={`mb-8 font-[family-name:var(--font-display)] text-5xl tracking-wider sm:text-6xl ${theme.heading}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className={`mb-10 text-lg leading-relaxed sm:text-xl ${theme.body}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Mechanical Engineering undergraduate at IIT Gandhinagar with an AI
          minor. Software Engineer at CogitX AI — building production-grade AI
          systems, full-stack apps, and everything in between. Knight on
          LeetCode, Pupil on Codeforces, always learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3
            className={`mb-4 font-[family-name:var(--font-display)] text-2xl tracking-wider ${theme.subheading}`}
          >
            Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
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
