import React from 'react';
import { IntlProvider, IntlShape, useIntl as officialUseItl } from 'react-intl';
import flat from 'flat';
import { useLocalStorage } from 'react-use';

import { LOCALES, LocaleValues } from '@app-types';
import enMessages from '@locales/en.json';
import ptMessages from '@locales/pt-br.json';

type CustomIntlShape = {
  switchToPortuguese(): void;
  switchToEnglish(): void;
  switchLocale(nextLocale: LocaleValues): void;
};

const IntlContext = React.createContext<CustomIntlShape | undefined>(undefined);

const localizedMessages = {
  [LOCALES.EN]: enMessages,
  [LOCALES.PT]: ptMessages,
};

const supportedLanguages: string[] = [LOCALES.PT, LOCALES.EN];

export const IntlContextProvider: React.FC = ({ children }) => {
  const [language = LOCALES.EN, setLanguage] = useLocalStorage<
    LOCALES | undefined
  >('raul-melo.dev__lang');

  function switchLocale(nextLanguage: LOCALES): void {
    const isSupported = supportedLanguages.includes(nextLanguage);
    setLanguage(isSupported ? nextLanguage : LOCALES.EN);
  }

  React.useEffect(() => {
    const navigatorLang = navigator.language.replace(/-.*/, '');
    switchLocale(navigatorLang as LOCALES);
  }, []);

  const messages = flat(localizedMessages[language!]) as Record<string, string>;

  function switchToEnglish(): void {
    switchLocale(LOCALES.EN);
  }

  function switchToPortuguese(): void {
    switchLocale(LOCALES.PT);
  }

  return (
    <IntlProvider locale={language!} messages={messages}>
      <IntlContext.Provider
        value={{ switchToPortuguese, switchToEnglish, switchLocale }}
      >
        {children}
      </IntlContext.Provider>
    </IntlProvider>
  );
};

export const useIntl = (): IntlShape & CustomIntlShape => {
  const intl = officialUseItl();
  const customIntl = React.useContext(IntlContext) as CustomIntlShape;

  return { ...intl, ...customIntl };
};
