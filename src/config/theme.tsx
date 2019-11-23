import React from 'react';
import { createContext, useState } from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components';

type ThemeProps = {
  children: React.ReactNode;
};

enum ThemesAvailable {
  DARK = 'dark',
  LIGHT = 'light',
}

type ContextType = {
  toggleTheme: () => void;
  theme: DefaultTheme;
  currentTheme: string;
  isDarkTheme: boolean;
};

export const ThemeContext = createContext<Partial<ContextType>>({});

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [currentTheme, setCurrentTheme] = useState(null);

  const isDarkTheme = currentTheme === ThemesAvailable.DARK;

  React.useEffect(() => {
    // @ts-ignore
    setCurrentTheme(window.__theme);
    // @ts-ignore
    window.__onThemeChange = () => setCurrentTheme(window.__theme);
  }, []);

  const toggleTheme = () => {
    const nextTheme =
      currentTheme === ThemesAvailable.LIGHT
        ? ThemesAvailable.DARK
        : ThemesAvailable.LIGHT;

    // @ts-ignore
    window.__setPreferredTheme(nextTheme);
  };

  function withFontFallback(fontName: string) {
    return `${fontName},-apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;`;
  }

  const theme: DefaultTheme = {
    isDarkTheme,
    font: {
      contentSans: withFontFallback('medium-content-sans-serif-font'),
      contentSerif: withFontFallback('medium-content-serif-font'),
      contentSlab: withFontFallback('medium-content-slab-serif-font'),
      contentTitle: withFontFallback('medium-content-title-font'),
      marketingDisplay: withFontFallback('medium-marketing-display-font'),
    },
    color: {
      background: 'var(--background)',
      font: 'var(--font)',
      fontMedium: 'var(--font-medium)',
      fontLight: 'var(--font-light)',
      border: 'var(--border)',
      shadow: 'var(--shadow)',
      shadowLight: 'var(--shadowLight)',
      shadowBright: 'var(--shadowBright)',
      shadowMenu: 'var(--shadowMenu)',
    },
  };

  return (
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          toggleTheme,
          theme,
          currentTheme,
          isDarkTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
