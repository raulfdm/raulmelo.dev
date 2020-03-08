import React from 'react';

import './styles/panda-prismjs.css';
import { IntlContextProvider } from './context/react-intl';
import { ThemeProvider } from './config/theme';

export const WrapRootElement: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <IntlContextProvider>{children}</IntlContextProvider>
    </ThemeProvider>
  );
};
