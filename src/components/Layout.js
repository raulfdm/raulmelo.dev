import React from 'react';

import MenuBar from '../components/MenuBar';
import { ThemeProvider } from '../config/theme';
import { Container } from '../components/ui';
import '../config/global.css';

const Layout = ({ children, noMenu }) => {
  return (
    <ThemeProvider>
      <Container>
        {!noMenu && <MenuBar />}
        {children}
      </Container>
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  noMenu: false,
};

export default Layout;
