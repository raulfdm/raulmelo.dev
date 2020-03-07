import React from 'react';

import './styles/panda-prismjs.css';
import { IntlContextProvider } from './context/react-intl';

export const WrapRootElement: React.FC = ({ children }) => {
  return <IntlContextProvider>{children}</IntlContextProvider>;
};
