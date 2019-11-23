import React from 'react';
import { LocaleProvider } from '../utils/LocaleContext';
import { i18n } from '../config/i18next';
import { Helmet } from 'react-helmet';

interface Props {
  children: React.ReactNode;
  pageContext: {
    resources: object;
    locale: string;
  };
}

export const PageRoot = ({
  children,
  pageContext: { locale, resources },
}: Props) => {
  /* NEVER EVER REMOVE THIS CODE.
  It basically loads all the translation resources into i18n instance
  */
  Object.entries(resources).forEach(([loc, resource]) =>
    i18n.addResourceBundle(loc, 'translation', resource, true)
  );

  i18n.changeLanguage(locale);

  return (
    <>
      <Helmet>
        <html lang={locale} />
      </Helmet>
      <LocaleProvider value={{ locale, resources }}>{children}</LocaleProvider>
    </>
  );
};
