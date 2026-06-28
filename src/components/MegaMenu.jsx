import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function MegaMenu({ item, isOpen, onNavigate, onClose }) {
  const { theme } = useTheme();

  if (!item?.megaMenu) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close menu"
            className={`fixed inset-0 z-40 ${theme.megaBackdrop}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.div
            className={`relative z-50 border-b ${theme.megaPanel}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-8 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 xl:grid-cols-4">
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
                          className={`group block w-full text-left transition-colors ${column.featured ? theme.megaFeaturedLink : theme.megaLink}`}
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
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
