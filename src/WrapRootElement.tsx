import React from 'react';
import { IntlContextProvider } from './contexts/react-intl';

export const WrapRootElement: React.FC = ({ children }) => {
  return <IntlContextProvider>{children}</IntlContextProvider>;
};
