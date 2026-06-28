import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RESUME_PATH } from "../config/site";

export default function HeroSection({
  onAnimationEnd,
  scrollToSection,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNav(true);
      onAnimationEnd?.();
    }, 2500);
    return () => clearTimeout(timeout);
  }, [onAnimationEnd]);

  const navLinks = [
    { label: "About", ref: aboutRef },
    { label: "Projects", ref: projectsRef },
    { label: "Resume", href: RESUME_PATH, download: true },
    { label: "Contact", ref: contactRef },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gta-gradient-animated opacity-90" />
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        className="relative z-10 flex h-60 w-60 items-center justify-center rounded-sm gta-glow sm:h-96 sm:w-96"
        initial={{ scale: 1.2, opacity: 1 }}
        animate={{ scale: 1, opacity: 0.95 }}
        transition={{ duration: 2 }}
      >
        <div className="gta-gradient flex h-full w-full items-center justify-center rounded-sm border border-white/20">
          <span className="font-[family-name:var(--font-display)] text-7xl tracking-wider text-white sm:text-9xl">
            MD
          </span>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p className="mb-2 text-lg font-light tracking-widest text-white/80 sm:text-xl">
          Hello! I&apos;m
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl tracking-wider text-white drop-shadow-lg sm:text-7xl">
          Mayank :)
        </h1>
      </motion.div>

      {showNav && (
        <motion.nav
          className="absolute top-0 left-0 z-30 flex w-full items-center justify-between px-6 py-5 sm:px-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-white">
            Mayank Dahotre
          </span>
          <ul className="flex gap-4 text-sm font-medium sm:gap-8 sm:text-base">
            {navLinks.map(({ label, ref, href, download }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    download={download ? "Mayank_Dahotre_Resume.pdf" : undefined}
                    className="text-white/90 transition-colors hover:text-gta-yellow"
                  >
                    {label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => scrollToSection(ref)}
                    className="cursor-pointer text-white/90 transition-colors hover:text-gta-yellow"
                  >
                    {label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </section>
  );
}
