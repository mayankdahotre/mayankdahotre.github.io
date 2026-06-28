import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function About({ aboutRef }) {
  const { theme } = useTheme();

  return (
    <section
      ref={aboutRef}
      className="relative px-6 py-20 sm:px-10 lg:px-20"
      id="about"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className={`mb-8 font-display text-5xl tracking-wider sm:text-6xl ${theme.heading}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className={`text-lg leading-relaxed sm:text-xl ${theme.body}`}
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
      </div>
    </section>
  );
}
