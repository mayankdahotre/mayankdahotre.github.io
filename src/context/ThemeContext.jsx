import { createContext, useContext, useEffect, useMemo } from "react";
import { theme } from "../config/themes";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  useEffect(() => {
    document.body.dataset.theme = "luxury";
  }, []);

  const value = useMemo(() => ({ theme }), []);

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
