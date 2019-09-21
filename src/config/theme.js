import { ThemeProvider as StyledThemeProvider } from 'styled-components';
const theme = {
  font: {
    contentSans: 'medium-content-sans-serif-font',
    contentSerif: 'medium-content-serif-font',
    contentSlab: 'medium-content-slab-serif-font',
    contentTitle: 'medium-content-title-font',
    marketingDisplay: 'medium-marketing-display-font',
  },
  color: {
    white: '#fff',
    black: {
      dark: 'rgba(0, 0, 0, 0.84)',
      medium: 'rgba(0, 0, 0, 0.54)',
      light: 'rgba(0, 0, 0, 0.1)',
    },
  },
};

export const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export default theme;
