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

function isWindowAvailable() {
  return typeof window !== 'undefined';
}

type ContextType = {
  toggleTheme: () => void;
  theme: DefaultTheme;
  currentTheme: string;
  isDarkTheme: boolean;
};

export const ThemeContext = createContext<Partial<ContextType>>({});

export const ThemeProvider = ({ children }: ThemeProps) => {
  function getDocumentTheme() {
    return (
      (isWindowAvailable() &&
        document.querySelector('html').getAttribute('data-theme')) ||
      ThemesAvailable.LIGHT
    );
  }
  const [currentTheme, setCurrentTheme] = useState(getDocumentTheme());

  const isDarkTheme = currentTheme === ThemesAvailable.DARK;

  const toggleTheme = () => {
    const nextTheme =
      currentTheme === ThemesAvailable.LIGHT
        ? ThemesAvailable.DARK
        : ThemesAvailable.LIGHT;

    if (isWindowAvailable()) {
      // @ts-ignore
      document.querySelector('html').setAttribute('data-theme', nextTheme);
    }
    /* TODO: Also save on localStorage */
    setCurrentTheme(nextTheme);
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
