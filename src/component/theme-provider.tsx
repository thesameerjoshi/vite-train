import React, { createContext, useContext, useState, useEffect } from "react";

export type Theme = "light" | "dark" | "retro" | "system";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{
  defaultTheme: Theme;
  storageKey: string;
  children: React.ReactNode;
}> = ({ children, defaultTheme, storageKey }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(storageKey);
    return (storedTheme as Theme) || defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, theme);
    document.documentElement.className = theme;
  }, [theme, storageKey]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
