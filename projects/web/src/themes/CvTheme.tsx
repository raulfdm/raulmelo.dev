import React from 'react';
import { theme, StyledThemeProvider, GlobalCVStyles } from '@screens/CV/styled';

export const CvTheme: React.FC = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme as never}>
      <GlobalCVStyles />
      {children}
    </StyledThemeProvider>
  );
};
