import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { MenuBar } from './MenuBar';
import { Container, pageTransitionVariants } from './Ui';
import { GlobalStyles } from '../styles';
import { ThemeProvider } from '../context/theme';

interface LayoutProps {
  children: React.ReactNode | React.ReactChildren;
  className?: string;
}

const Main = Container.withComponent('main');

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <ThemeProvider>
        <MenuBar />
        <Main
          initial="exit"
          animate="enter"
          exit="exit"
          variants={pageTransitionVariants}
          className={className}
        >
          <GlobalStyles />
          {children}
        </Main>
      </ThemeProvider>
    </AnimatePresence>
  );
};

export default Layout;
