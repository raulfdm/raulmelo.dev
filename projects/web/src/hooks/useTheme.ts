import { useContext } from 'react';

import { ThemeContext } from '@contexts/theme';

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used under ThemeProvider context');
  }

  return context;
}
