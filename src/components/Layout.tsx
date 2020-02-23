import React from 'react';

import { MenuBar } from './MenuBar';
import { ThemeProvider } from '../config/theme';
import { Container } from './Ui';
import { GlobalStyles } from '../styles';

interface Props {
  children: React.ReactNode | React.ReactChildren;
  noMenu?: boolean;
  noGlobals?: boolean;
}

const Layout: React.FC<Props> = ({ children, noMenu, noGlobals }) => {
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
