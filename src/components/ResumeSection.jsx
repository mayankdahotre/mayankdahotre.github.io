import { motion } from "framer-motion";
import { RESUME_PATH } from "../config/site";
import { useTheme } from "../context/ThemeContext";

export default function ResumeSection({ resumeRef }) {
  const { theme } = useTheme();

  return (
    <section
      ref={resumeRef}
      className="relative px-6 py-20 sm:px-10 lg:px-20"
      id="resume"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          className={`mb-6 font-[family-name:var(--font-display)] text-5xl tracking-wider sm:text-6xl ${theme.heading}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>

        <motion.p
          className={`mb-8 text-lg ${theme.muted}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Download my latest resume or reach out for a detailed CV.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={RESUME_PATH}
            download="Mayank_Dahotre_Resume.pdf"
            className={theme.primaryBtn}
          >
            Download Resume
          </a>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className={theme.secondaryBtn}
          >
            View PDF
          </a>
        </motion.div>
      </div>
    </section>
  );
}
