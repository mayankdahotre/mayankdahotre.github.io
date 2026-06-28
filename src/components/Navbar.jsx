import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NAV_ITEMS } from "../config/navigation";
import { useTheme } from "../context/ThemeContext";
import MegaMenu from "./MegaMenu";

const CLOSE_DELAY_MS = 160;

export default function Navbar({ scrollToSection, sectionRefs }) {
  const { theme } = useTheme();
  const [activeMega, setActiveMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimerRef = useRef(null);

  const activeItem = useMemo(
    () => NAV_ITEMS.find((item) => item.key === activeMega),
    [activeMega],
  );

  const linkClass = `shrink-0 whitespace-nowrap text-white transition-colors duration-200 ${theme.accentHover}`;
  const activeLinkClass = "text-white/80";

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => {
      setActiveMega(null);
    }, CLOSE_DELAY_MS);
  }, [cancelClose]);

  const openMega = useCallback(
    (key) => {
      cancelClose();
      setActiveMega(key);
    },
    [cancelClose],
  );

  useEffect(() => () => cancelClose(), [cancelClose]);

  const handleNavigate = useCallback(
    (link) => {
      cancelClose();
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
    [cancelClose, sectionRefs],
  );

  const handleSectionClick = (item) => {
    cancelClose();
    setActiveMega(null);
    setMobileOpen(false);
    scrollToSection(sectionRefs[item.sectionKey]);
  };

  const handleNavItemEnter = (item) => {
    cancelClose();
    if (item.megaMenu) {
      openMega(item.key);
    } else {
      setActiveMega(null);
    }
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${theme.navShell}`}>
      <div
        className={`relative ${theme.navBar}`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <nav className="relative z-[70] mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 sm:px-8">
          <button
            type="button"
            onClick={() => scrollToSection(sectionRefs.about)}
            className="shrink-0 cursor-pointer font-display text-sm tracking-wide text-white sm:text-base"
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

          <ul className="hidden items-center justify-end gap-1 sm:flex md:gap-2">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.key}
                className="relative"
                onMouseEnter={() => handleNavItemEnter(item)}
              >
                <button
                  type="button"
                  onClick={() => handleSectionClick(item)}
                  className={`cursor-pointer rounded-sm px-2 py-2 text-xs font-emphasis transition-colors duration-200 sm:px-2.5 sm:text-sm ${linkClass} ${
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
              transition={{ duration: 0.25, ease: "easeOut" }}
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

        <MegaMenu
          item={activeItem}
          isOpen={Boolean(activeItem?.megaMenu)}
          onNavigate={handleNavigate}
          onClose={() => {
            cancelClose();
            setActiveMega(null);
          }}
        />
      </div>
    </header>
  );
}
