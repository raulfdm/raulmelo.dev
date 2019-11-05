import React, { useContext } from 'react';
import { I18nextProvider } from 'react-i18next';

import { i18n } from '../config/i18next';
import MenuBar from './MenuBar';
import { ThemeProvider } from '../config/theme';
import { Container } from './ui';
import { GlobalStyles } from '../config/globalStyle';
import { LocaleContext } from '../utils/LocaleContext';

interface Props {
  children: React.ReactNode;
  noMenu: boolean;
  noGlobals: boolean;
}

const Layout = ({ children, noMenu, noGlobals }: Props) => {
  const { resources } = useContext(LocaleContext);

  /* THIS PIECE OF CODE IS AMAZING */
  Object.entries(resources).forEach(([locale, resource]) =>
    i18n.addResourceBundle(locale, 'translation', resource)
  );

  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <Container>
          {!noGlobals && <GlobalStyles />}
          {!noMenu && <MenuBar />}
          {children}
        </Container>
      </I18nextProvider>
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  noMenu: false,
  noGlobals: false,
};

export default Layout;
