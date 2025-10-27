// src/hook/useTheme.tsx
import React from 'react';
import type { ReactNode } from 'react';
import {
  lightColors,
  darkColors,
  lightGradients,
  darkGradients,
  ThemeColors,
  ThemeGradients,
} from '../Colors';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextProps {
  theme: ThemeMode;
  colors: ThemeColors;
  gradients: ThemeGradients;
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = React.useState<ThemeMode>('dark');

  const toggleTheme = React.useCallback(() => {
    setMode(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  const colors = React.useMemo(
    () => mode === 'dark' ? darkColors : lightColors,
    [mode]
  );

  const gradients = React.useMemo(
    () => mode === 'dark' ? darkGradients : lightGradients,
    [mode]
  );

  const value = React.useMemo(
    () => ({
      theme: mode,
      colors,
      gradients,
      mode,
      toggleTheme,
    }),
    [mode, colors, gradients, toggleTheme]
  );

  return React.createElement(ThemeContext.Provider, { value }, children);
}

export function useTheme(): ThemeContextProps {
  const context = React.useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}