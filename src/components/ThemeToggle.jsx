import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme.id === "gta" ? "Gold" : "GTA V"} theme`}
      className={`fixed right-5 bottom-5 z-50 cursor-pointer rounded-sm border px-4 py-2 text-sm font-emphasis backdrop-blur-md transition-all hover:scale-105 ${
        theme.id === "gta"
          ? "border-gta-orange/40 bg-gta-purple/80 text-gta-yellow hover:border-gta-yellow"
          : "border-luxury-gold/40 bg-luxury-charcoal/90 text-luxury-gold hover:border-luxury-gold luxury-glow"
      }`}
    >
      {theme.id === "gta" ? "✦ Gold Theme" : "✦ GTA Theme"}
    </button>
  );
}
