import React from 'react';
import { LocaleProvider } from '../utils/LocaleContext';

interface Props {
  children: React.ReactNode;
  pageContext: {
    locale: string;
  };
}

export const PageRoot = ({ children, pageContext: { locale } }: Props) => {
  return <LocaleProvider value={{ locale }}>{children}</LocaleProvider>;
};
