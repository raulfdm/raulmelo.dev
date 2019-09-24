import React from 'react';
import { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const themesAvaiable = {
    dark: 'dark',
    light: 'light',
  };

  const currentTheme = (light = isLightTheme) =>
    light ? themesAvaiable.light : themesAvaiable.dark;

  const toggleTheme = () => {
    const nextTheme = currentTheme(!isLightTheme);

    if (document) {
      const $html = document.querySelector('html');

      $html.setAttribute('data-theme', nextTheme);

      setIsLightTheme(!isLightTheme);
    }
  };

  const theme = {
    font: {
      contentSans: 'medium-content-sans-serif-font',
      contentSerif: 'medium-content-serif-font',
      contentSlab: 'medium-content-slab-serif-font',
      contentTitle: 'medium-content-title-font',
      marketingDisplay: 'medium-marketing-display-font',
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
    <StyledThemeProvider theme={theme} lol>
      <ThemeContext.Provider
        value={{
          toggleTheme,
          theme,
          currentTheme: currentTheme(),
          themesAvaiable,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
