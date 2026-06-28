import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroGold from "../assets/hero-gold.png";
import { RESUME_PATH } from "../config/site";
import { useTheme } from "../context/ThemeContext";

export default function HeroSectionLuxury({
  onAnimationEnd,
  scrollToSection,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  const { theme } = useTheme();
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-luxury-dark">
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        className="relative z-10"
        initial={{ scale: 1.2, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.img
          src={heroGold}
          alt="Mayank Dahotre"
          className="h-72 w-auto max-w-[min(90vw,22rem)] rounded-sm object-cover shadow-2xl sm:h-96 sm:max-w-none luxury-glow"
          animate={{ opacity: 0.35 }}
          transition={{ delay: 1.9, duration: 0.9, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.9, duration: 0.9, ease: "easeInOut" }}
        >
          <span className="font-[family-name:var(--font-display)] text-7xl tracking-wider text-luxury-gold drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-8xl">
            MD
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1, ease: "easeOut" }}
      >
        <p className="mb-2 text-lg font-light tracking-widest text-luxury-gold-light/90 sm:text-xl">
          Hello! I&apos;m
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl tracking-wider text-luxury-gold drop-shadow-lg sm:text-7xl">
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
          <span className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-luxury-gold">
            Mayank Dahotre
          </span>
          <ul className="flex gap-4 text-sm font-medium sm:gap-8 sm:text-base">
            {navLinks.map(({ label, ref, href, download }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    download={download ? "Mayank_Dahotre_Resume.pdf" : undefined}
                    className={`text-luxury-gold-light/90 transition-colors ${theme.accentHover}`}
                  >
                    {label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => scrollToSection(ref)}
                    className={`cursor-pointer text-luxury-gold-light/90 transition-colors ${theme.accentHover}`}
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
