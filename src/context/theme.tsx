import React from 'react';
import { createContext, useState } from 'react';
import { EmotionThemeProvider, SiteTheme } from 'styles/emotion';
import { theme } from 'styles/theme';
import { themeBackgroundColor } from 'styles/globals';

type ThemeProps = {
  children: React.ReactNode;
};

type ContextType = {
  toggleTheme: () => void;
  theme: SiteTheme;
  currentTheme: string;
  isDarkTheme: boolean;
};

type ThemeKeys = keyof typeof ThemesAvailable;
export const ThemeContext = createContext<Partial<ContextType>>({});

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeKeys>('light');

  const isDarkTheme = currentTheme === 'dark';

  React.useEffect(() => {
    setCurrentTheme(window.__theme);
    setMetaTheme(window.__theme);
    window.__onThemeChange = () => setCurrentTheme(window.__theme);
  }, []);

  function setMetaTheme(theme: ThemeKeys): void {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', themeBackgroundColor[theme]);
  }

  const toggleTheme = (): void => {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    setMetaTheme(nextTheme);
    window.__setPreferredTheme(nextTheme);
  };

  const enhancedTheme = { ...(theme as SiteTheme), isDarkTheme };

  return (
    <EmotionThemeProvider theme={enhancedTheme}>
      <ThemeContext.Provider
        value={{
          toggleTheme,
          theme: enhancedTheme,
          currentTheme,
          isDarkTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};
