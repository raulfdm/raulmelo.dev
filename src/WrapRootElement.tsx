import React from 'react';
import { IntlContextProvider } from './context/react-intl';

export const WrapRootElement: React.FC = ({ children }) => {
  return <IntlContextProvider>{children}</IntlContextProvider>;
};
