import React from 'react';

import MenuBar from '../components/MenuBar';
import { ThemeProvider } from '../config/theme';
import { Container } from '../components/ui';
import { GlobalStyles } from '../config/globalStyle';

const Layout = ({ children, noMenu, noGlobals }) => {
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
  noGlobals: false
};

export default Layout;
