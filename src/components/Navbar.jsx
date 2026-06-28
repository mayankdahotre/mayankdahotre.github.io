import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const NAV_ITEMS = [
  { key: "about", label: "About" },
  { key: "skills", label: "Skills" },
  { key: "research", label: "Research" },
  { key: "experience", label: "Exp" },
  { key: "blog", label: "Blog" },
  { key: "resume", label: "Resume" },
  { key: "projects", label: "Projects" },
];

export default function Navbar({
  variant = "luxury",
  scrollToSection,
  sectionRefs,
  animated = false,
}) {
  const { theme } = useTheme();

  const nameClass =
    variant === "gta"
      ? "shrink-0 font-display text-xl tracking-wider text-white sm:text-2xl"
      : "shrink-0 font-display text-sm tracking-wide text-luxury-gold sm:text-base";

  const linkClass =
    variant === "gta"
      ? `shrink-0 whitespace-nowrap text-white/90 transition-colors ${theme.accentHover}`
      : `shrink-0 whitespace-nowrap text-luxury-gold-light/80 transition-colors ${theme.accentHover}`;

  const navClass =
    variant === "gta"
      ? "absolute top-0 left-0 z-30 flex w-full items-center justify-between gap-4 px-5 py-2 sm:px-8 sm:py-2.5"
      : "flex w-full items-center justify-between gap-4 px-5 py-2 sm:px-8 sm:py-2.5";

  const content = (
    <nav className={navClass}>
      <span className={nameClass}>Mayank Dahotre</span>
      <ul className="flex max-w-[68vw] items-center justify-end gap-3 overflow-x-auto sm:max-w-none sm:gap-4 md:gap-5">
        {NAV_ITEMS.map(({ key, label }) => (
          <li key={key}>
            <button
              type="button"
              onClick={() => scrollToSection(sectionRefs[key])}
              className={`cursor-pointer text-xs font-emphasis sm:text-sm ${linkClass}`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
