import heroGold from "../assets/hero-gold.jpg";
import { RESUME_PATH } from "../config/site";
import { useTheme } from "../context/ThemeContext";

export default function HeroSectionLuxury({
  scrollToSection,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  const { theme } = useTheme();

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
        {/* 4:3 landscape — ~55vw wide on desktop, matching reference proportions */}
        <div className="relative h-60 w-[min(100%,20rem)] overflow-hidden rounded-sm shadow-[0_6px_28px_rgba(0,0,0,0.35)] sm:h-96 sm:w-[min(55vw,32rem)]">
          <img
            src={heroGold}
            alt="Mayank Dahotre"
            className="h-full w-full object-cover object-[center_38%]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <p className="mb-1 text-sm font-light text-white sm:text-base">
              Hello! I&apos;m
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-luxury-gold-light drop-shadow-md sm:text-5xl md:text-6xl">
              Mayank :)
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
