import { motion } from "framer-motion";
import { EMAIL, GITHUB, LINKEDIN, RESUME_PATH } from "../config/site";

const socials = [
  {
    name: "GitHub",
    url: GITHUB,
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: LINKEDIN,
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: `mailto:${EMAIL}`,
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function Contact({ contactRef }) {
  return (
    <section
      ref={contactRef}
      className="relative px-6 py-24 sm:px-10 lg:px-20"
      id="contact"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          className="mb-6 font-[family-name:var(--font-display)] text-5xl tracking-wider gta-gradient-text sm:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="mb-12 text-lg text-white/70"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Have a project in mind or just want to say hi? I&apos;d love to hear
          from you.
        </motion.p>

        <motion.div
          className="mb-16 flex justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-14 w-14 items-center justify-center rounded-sm border border-white/10 bg-gta-purple/30 text-white/80 transition-all hover:border-gta-orange/50 hover:text-gta-yellow hover:gta-glow"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a
            href={`mailto:${EMAIL}`}
            className="gta-gradient inline-block rounded-sm px-10 py-4 font-[family-name:var(--font-display)] text-xl tracking-wider text-white transition-transform hover:scale-105"
          >
            Say Hello
          </a>
          <a
            href={RESUME_PATH}
            download="Mayank_Dahotre_Resume.pdf"
            className="inline-block rounded-sm border border-gta-orange/50 px-10 py-4 font-[family-name:var(--font-display)] text-xl tracking-wider text-gta-yellow transition-all hover:border-gta-yellow hover:bg-gta-purple/30 hover:scale-105"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <footer className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Mayank Dahotre. Built with React & Tailwind.
      </footer>
    </section>
  );
}
