import React from 'react';
import { createContext, useState } from 'react';
import { EmotionThemeProvider, SiteTheme } from 'styles/emotion';

type ThemeProps = {
  children: React.ReactNode;
};

type ContextType = {
  toggleTheme: () => void;
  theme: SiteTheme;
  currentTheme: string;
  isDarkTheme: boolean;
};

function withFontFallback(fontName: string, serif: boolean): string {
  return `"${fontName}",-apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
  ${serif ? '' : 'sans-'}serif;`;
}

export const ThemeContext = createContext<Partial<ContextType>>({});

export const FONTS = {
  contentSans: 'Open Sans',
  contentSerif: 'Merriweather',
  contentTitle: 'content-title',
};

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<
    keyof typeof ThemesAvailable
  >('light');

  const isDarkTheme = currentTheme === 'dark';

  React.useEffect(() => {
    setCurrentTheme(window.__theme);

    window.__onThemeChange = () => setCurrentTheme(window.__theme);
  }, []);

  const toggleTheme = (): void => {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    window.__setPreferredTheme(nextTheme);
  };

  const theme: SiteTheme = {
    isDarkTheme,
    font: {
      contentSans: withFontFallback(FONTS.contentSans, false),
      contentSerif: withFontFallback(FONTS.contentSerif, true),
      contentTitle: withFontFallback('content-title', true),
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
    <EmotionThemeProvider theme={theme}>
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
    </EmotionThemeProvider>
  );
};
