import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { MenuBar } from './MenuBar';
import { Container, pageTransitionVariants } from './Ui';
import { GlobalStyles } from '../styles';
import { ThemeProvider } from '../config/theme';

interface Props {
  children: React.ReactNode | React.ReactChildren;
  noMenu?: boolean;
  noGlobals?: boolean;
}

const Layout: React.FC<Props> = ({ children, noMenu, noGlobals }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider>
        <Container
          initial="exit"
          animate="enter"
          exit="exit"
          variants={pageTransitionVariants}
        >
          {!noGlobals && <GlobalStyles />}
          {!noMenu && <MenuBar />}
          {children}
        </Container>
      </ThemeProvider>
    </AnimatePresence>
  );
};

Layout.defaultProps = {
  noMenu: false,
  noGlobals: false,
};

export default Layout;
