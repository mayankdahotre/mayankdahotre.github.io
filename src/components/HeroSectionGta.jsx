import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useTheme } from "../context/ThemeContext";

export default function HeroSectionGta({ onAnimationEnd, scrollToSection, sectionRefs }) {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNav(true);
      onAnimationEnd?.();
    }, 2500);
    return () => clearTimeout(timeout);
  }, [onAnimationEnd]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gta-gradient-animated opacity-90" />
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        className="relative z-10 flex h-60 w-60 items-center justify-center rounded-sm gta-glow sm:h-96 sm:w-96"
        initial={{ scale: 1.2, opacity: 1 }}
        animate={{ scale: 0.92, opacity: 0 }}
        transition={{
          scale: { duration: 2, ease: "easeOut" },
          opacity: { delay: 1.9, duration: 0.9, ease: "easeInOut" },
        }}
      >
        <div className="gta-gradient flex h-full w-full items-center justify-center rounded-sm border border-white/20">
          <span className="font-[family-name:var(--font-display)] text-7xl tracking-wider text-white sm:text-9xl">
            MD
          </span>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1, ease: "easeOut" }}
      >
        <p className="mb-2 text-lg font-light tracking-widest text-white/80 sm:text-xl">
          Hello! I&apos;m
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl tracking-wider text-white drop-shadow-lg sm:text-7xl">
          Mayank :)
        </h1>
      </motion.div>

      {showNav && (
        <Navbar
          variant="gta"
          scrollToSection={scrollToSection}
          sectionRefs={sectionRefs}
          animated
        />
      )}
    </section>
  );
}
