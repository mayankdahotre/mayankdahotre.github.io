import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { THEME_STORAGE_KEY, themes } from "../config/themes";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    return saved === "luxury" ? "luxury" : "gta";
  });

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
    document.body.dataset.theme = themeId;
  }, [themeId]);

  const value = useMemo(
    () => ({
      theme: themes[themeId],
      themeId,
      setThemeId,
      toggleTheme: () =>
        setThemeId((current) => (current === "gta" ? "luxury" : "gta")),
    }),
    [themeId],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
