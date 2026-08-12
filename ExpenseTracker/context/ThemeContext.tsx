import React, { createContext, useContext, useState } from 'react';
import { Colors } from '@/constants/colors';

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  theme: typeof Colors.light;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? Colors.dark : Colors.light;

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
}