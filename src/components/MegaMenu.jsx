import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function MegaMenu({ item, isOpen, onNavigate, onClose }) {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && item?.megaMenu && (
        <>
          <motion.div
            aria-hidden
            className={`fixed inset-x-0 bottom-0 top-14 z-[55] ${theme.megaBackdrop}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={onClose}
          />

          <motion.div
            className={`relative z-[60] ${theme.megaPanel}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="absolute inset-x-0 -top-4 h-4"
              aria-hidden
            />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mx-auto grid max-w-6xl gap-10 px-6 py-8 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 xl:grid-cols-4"
              >
                {item.megaMenu.columns.map((column) => (
                  <div key={column.heading}>
                    <p
                      className={`mb-4 text-xs uppercase tracking-widest ${theme.megaHeading}`}
                    >
                      {column.heading}
                    </p>
                    <ul className="space-y-2">
                      {column.links.map((link) => (
                        <li key={`${column.heading}-${link.label}`}>
                          <button
                            type="button"
                            onClick={() => onNavigate(link)}
                            className={`group block w-full text-left transition-colors duration-200 ${column.featured ? theme.megaFeaturedLink : theme.megaLink}`}
                          >
                            <span className="block">{link.label}</span>
                            {link.description && (
                              <span
                                className={`mt-0.5 block text-xs ${theme.megaDescription}`}
                              >
                                {link.description}
                              </span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
