import { useEffect } from "react";
import heroGold from "../assets/hero-gold.jpg";
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

  useEffect(() => {
    onAnimationEnd?.();
  }, [onAnimationEnd]);

  const navLinks = [
    { label: "About", ref: aboutRef },
    { label: "Projects", ref: projectsRef },
    { label: "Resume", href: RESUME_PATH, download: true },
    { label: "Contact", ref: contactRef },
  ];

  return (
    <section className="relative flex min-h-screen flex-col bg-luxury-dark">
      <nav className="flex w-full items-center justify-between px-6 py-6 sm:px-12 sm:py-8">
        <span className="text-sm font-normal tracking-wide text-luxury-gold sm:text-base">
          Mayank Dahotre
        </span>
        <ul className="flex gap-5 text-sm text-luxury-gold-light/80 sm:gap-8">
          {navLinks.map(({ label, ref, href, download }) => (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  download={download ? "Mayank_Dahotre_Resume.pdf" : undefined}
                  className={`transition-colors ${theme.accentHover}`}
                >
                  {label}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => scrollToSection(ref)}
                  className={`cursor-pointer transition-colors ${theme.accentHover}`}
                >
                  {label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-1 items-center justify-center px-6 pb-16 sm:px-12">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-sm luxury-glow shadow-[0_8px_40px_rgba(201,162,39,0.15)] aspect-[4/3]">
          <img
            src={heroGold}
            alt="Mayank Dahotre"
            className="h-full w-full object-cover object-[center_35%]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <p className="mb-1 text-base font-light text-white sm:text-lg">
              Hello! I&apos;m
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl tracking-wide text-luxury-gold-light drop-shadow-md sm:text-6xl md:text-7xl">
              Mayank :)
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
