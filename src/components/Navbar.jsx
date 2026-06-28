import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import { NAV_ITEMS } from "../config/navigation";
import { useTheme } from "../context/ThemeContext";
import MegaMenu from "./MegaMenu";

export default function Navbar({
  variant = "luxury",
  scrollToSection,
  sectionRefs,
  visible = true,
  animated = false,
}) {
  const { theme } = useTheme();
  const [activeMega, setActiveMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeItem = useMemo(
    () => NAV_ITEMS.find((item) => item.key === activeMega),
    [activeMega],
  );

  const nameClass =
    variant === "gta"
      ? "shrink-0 font-display text-lg tracking-wider text-white sm:text-xl"
      : "shrink-0 font-display text-sm tracking-wide text-white sm:text-base";

  const linkClass =
    variant === "gta"
      ? `shrink-0 whitespace-nowrap text-white/90 transition-colors ${theme.accentHover}`
      : `shrink-0 whitespace-nowrap text-white transition-colors ${theme.accentHover}`;

  const activeLinkClass =
    variant === "gta" ? "text-gta-yellow" : "text-white/80";

  const handleNavigate = useCallback(
    (link) => {
      setActiveMega(null);
      setMobileOpen(false);

      if (link.href && link.href !== "#") {
        window.open(link.href, "_blank", "noopener,noreferrer");
        return;
      }

      const ref = sectionRefs[link.sectionKey];
      ref?.current?.scrollIntoView({ behavior: "smooth" });

      if (link.anchor) {
        window.setTimeout(() => {
          document
            .getElementById(link.anchor)
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 350);
      }
    },
    [sectionRefs],
  );

  const handleSectionClick = (item) => {
    setActiveMega(null);
    setMobileOpen(false);
    scrollToSection(sectionRefs[item.sectionKey]);
  };

  if (!visible) return null;

  const navInner = (
    <>
      <div className={`relative ${theme.navBar}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 sm:px-8">
          <button
            type="button"
            onClick={() => scrollToSection(sectionRefs.about)}
            className={`cursor-pointer ${nameClass}`}
          >
            Mayank Dahotre
          </button>

          <button
            type="button"
            className={`ml-auto flex h-9 w-9 items-center justify-center rounded-sm border sm:hidden ${theme.navMobileToggle}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>

          <ul className="hidden items-center justify-end gap-4 sm:flex md:gap-5">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.key}
                onMouseEnter={() =>
                  item.megaMenu ? setActiveMega(item.key) : setActiveMega(null)
                }
              >
                <button
                  type="button"
                  onClick={() => handleSectionClick(item)}
                  className={`cursor-pointer text-xs font-emphasis sm:text-sm ${linkClass} ${
                    activeMega === item.key ? activeLinkClass : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`overflow-hidden border-t sm:hidden ${theme.navMobileDrawer}`}
            >
              <ul className="space-y-1 px-5 py-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.key}>
                    <button
                      type="button"
                      onClick={() => handleSectionClick(item)}
                      className={`w-full px-3 py-2 text-left text-sm ${linkClass}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <MegaMenu
        item={activeItem}
        isOpen={Boolean(activeItem?.megaMenu)}
        onNavigate={handleNavigate}
        onClose={() => setActiveMega(null)}
      />
    </>
  );

  const shell = (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${theme.navShell}`}
      onMouseLeave={() => setActiveMega(null)}
    >
      {navInner}
    </header>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {shell}
      </motion.div>
    );
  }

  return shell;
}
