import React from 'react';

import { AppThemeProvider } from '@contexts/AppTheme';
import { blogGlobalStyles } from './styles/globals';
import { GlobalStyles } from '@styles/index';

export const BlogTheme: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles global={blogGlobalStyles} />
      <AppThemeProvider>{children}</AppThemeProvider>
    </>
  );
};
