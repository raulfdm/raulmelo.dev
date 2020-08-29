import React, { createContext, useState } from 'react';

import { StyledThemeProvider, SiteTheme } from '@styles/styled';
import { theme as appTheme } from '@styles/theme';
import { themeBackgroundColor } from '@styles/globals';

type ThemeProps = {
  children: React.ReactNode;
  initialTheme?: ThemeValues;
};

type ContextType = {
  toggleTheme: (opt?: { theme: ThemeValues }) => void;
  theme: SiteTheme;
  currentTheme: string;
  isDarkTheme: boolean;
};

export const ThemeContext = createContext<Partial<ContextType>>({});

function setMetaTheme(theme: ThemeValues): void {
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', themeBackgroundColor[theme]);
}

function useThemeHandler({ initialTheme }: { initialTheme: ThemeValues }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeValues>(initialTheme);

  React.useEffect(() => {
    setCurrentTheme(window.__theme);
    setMetaTheme(window.__theme);
    window.__onThemeChange = () => setCurrentTheme(window.__theme);
  }, []);

  React.useEffect(() => {
    toggleTheme({ theme: initialTheme });
  }, [initialTheme]);

  function toggleTheme(opts?: { theme: ThemeValues }): void {
    const nextTheme =
      opts?.theme || (currentTheme === 'dark' ? 'light' : 'dark');

    setMetaTheme(nextTheme);
    window.__setPreferredTheme(nextTheme);
  }

  return {
    currentTheme,
    toggleTheme,
  };
}

export const ThemeProvider: React.FC<ThemeProps> = ({
  children,
  initialTheme = 'light',
}) => {
  const { currentTheme, toggleTheme } = useThemeHandler({ initialTheme });

  const isDarkTheme = currentTheme === 'dark';

  const enhancedTheme = { ...(appTheme as SiteTheme), isDarkTheme };

  return (
    <StyledThemeProvider theme={enhancedTheme}>
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
    </StyledThemeProvider>
  );
};
