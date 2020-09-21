import React from 'react';
import { ThemeProvider } from '@contexts/theme';
import { GlobalStyles } from '@styles/index';

export const SiteTheme: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
