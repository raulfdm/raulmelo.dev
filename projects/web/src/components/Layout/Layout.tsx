import React from 'react';
import { motion } from 'framer-motion';

import { styled, media, SiteTheme } from '@styles/styled';
import { MenuBar } from '@components/MenuBar';
import { Container, pageTransitionVariants } from '@components/Ui';
import { GlobalStyles } from '@styles/index';
import { ThemeProvider } from '@contexts/theme';
import { SideMenu } from '@components/SideMenu';

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

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <ThemeProvider>
      <MenuBar />
      <Main
        as={motion.main}
        initial="enter"
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
