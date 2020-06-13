import React from 'react';
import { createContext, useState } from 'react';
import { EmotionThemeProvider, SiteTheme } from 'styles/emotion';
import { theme } from 'styles/theme';

type ThemeProps = {
  children: React.ReactNode;
};

type ContextType = {
  toggleTheme: () => void;
  theme: SiteTheme;
  currentTheme: string;
  isDarkTheme: boolean;
};

export const ThemeContext = createContext<Partial<ContextType>>({});

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
