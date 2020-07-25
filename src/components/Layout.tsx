import React from 'react';
import { motion } from 'framer-motion';

import { styled, media, SiteTheme } from '@styles/styled';
import { MenuBar } from './MenuBar';
import { Container, pageTransitionVariants } from './Ui';
import { GlobalStyles } from '../styles';
import { ThemeProvider } from '../contexts/theme';
import { SideMenu } from './SideMenu';

interface LayoutProps {
  children: React.ReactNode | React.ReactChildren;
  className?: string;
}

const Main = styled(Container)`
  && {
    padding-top: ${({ theme }) => `calc(35px + ${theme.sizes.menuBar.height})`};

    ${media.greaterThan('medium')`
      padding-top: ${({ theme }: { theme: SiteTheme }) =>
        `calc(35px + ${theme.sizes.menuBar.height})`};
    `}
  }
`;

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <ThemeProvider>
      <MenuBar />
      <Main
        as={motion.main}
        initial="exit"
        animate="enter"
        exit="exit"
        variants={pageTransitionVariants}
        className={className}
      >
        <GlobalStyles />
        {children}
      </Main>
      <SideMenu />
    </ThemeProvider>
  );
};

export default Layout;
