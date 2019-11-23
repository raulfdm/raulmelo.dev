import React from 'react';
import { createContext, useState } from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components';

type ThemeProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const themesAvailable = {
    dark: 'dark',
    light: 'light',
  };

  const currentTheme = (light = isLightTheme) =>
    light ? themesAvailable.light : themesAvailable.dark;

  const toggleTheme = () => {
    const nextTheme = currentTheme(!isLightTheme);

    if (document) {
      const $html = document.querySelector('html');

      // @ts-ignore
      $html.setAttribute('data-theme', nextTheme);

      setIsLightTheme(!isLightTheme);
    }
  };

  function withFontFallback(fontName: string) {
    return `${fontName},-apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;`;
  }

  const theme: DefaultTheme = {
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
    },
  };

  return (
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          toggleTheme,
          theme,
          currentTheme: currentTheme(),
          themesAvailable,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
