import React from 'react';

import { IntlContextProvider } from '@contexts/react-intl';
import { AppContextProvider } from '@contexts/app';

export const WrapRootElement: React.FC = ({ children }) => {
  return (
    <IntlContextProvider>
      <AppContextProvider>{children}</AppContextProvider>
    </IntlContextProvider>
  );
};
