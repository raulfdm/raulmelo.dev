import React from 'react';
import { Helmet } from 'react-helmet';
import { I18nextProvider } from 'react-i18next';

import { LocaleProvider } from '../utils/LocaleContext';
import { i18n } from '../config/i18next';

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
      <LocaleProvider value={{ locale, resources }}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </LocaleProvider>
    </>
  );
};
