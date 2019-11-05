import React from 'react';
import { LocaleProvider } from '../utils/LocaleContext';

interface Props {
  children: React.ReactNode;
  pageContext: {
    resources: object;
    locale: string;
  };
}

export const PageRoot = ({
  children,
  pageContext: { locale, resources, ...stuffs },
}: Props) => {
  return (
    <LocaleProvider value={{ locale, resources }}>{children}</LocaleProvider>
  );
};
