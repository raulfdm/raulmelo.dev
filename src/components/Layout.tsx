import React from 'react';

import MenuBar from './MenuBar';
import { ThemeProvider } from '../config/theme';
import { Container } from './ui';
import { GlobalStyles } from '../config/globalStyle';

interface Props {
  children: React.ReactNode;
  noMenu: boolean;
  noGlobals: boolean;
}

const Layout = ({ children, noMenu, noGlobals }: Props) => {
  return (
    <ThemeProvider>
      <Container>
        {!noGlobals && <GlobalStyles />}
        {!noMenu && <MenuBar />}
        {children}
      </Container>
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  noMenu: false,
  noGlobals: false,
};

export default Layout;
