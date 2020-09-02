import React from 'react';
import { IntlProvider, IntlShape, useIntl as officialUseItl } from 'react-intl';
import flat from 'flat';
import useLocalStorage from 'react-use/lib/useLocalStorage';

import { LOCALES, LocaleValues } from '@app-types';
import enMessages from '@locales/en.json';
import ptMessages from '@locales/pt-br.json';
import { isBrowserApiAvailable } from '@utils/utilities';

type CustomIntlShape = {
  switchToPortuguese(): void;
  switchToEnglish(): void;
  switchLocale(nextLocale: LocaleValues): void;
};

const IntlContext = React.createContext<CustomIntlShape | undefined>(undefined);

const supportedLanguages: string[] = [LOCALES.PT, LOCALES.EN];

const getBrowserUrl = () => {
  const navigatorLang = isBrowserApiAvailable.navigator
    ? (navigator.language.replace(/-.*/, '') as LocaleValues)
    : 'en';

  const isSupported = supportedLanguages.includes(navigatorLang);

  return isSupported ? navigatorLang : 'en';
};

const localizedMessages = {
  [LOCALES.EN]: enMessages,
  [LOCALES.PT]: ptMessages,
};

type IntlContextProviderProps = {
  lang?: LocaleValues;
};

export const IntlContextProvider: React.FC<IntlContextProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useLocalStorage<LocaleValues>(
    'raul-melo.dev__lang',
    getBrowserUrl(),
  );

  function switchLocale(nextLanguage: LocaleValues): void {
    setLanguage(nextLanguage);
  }

  const messages = React.useMemo(
    () => flat(localizedMessages[language!]) as Record<string, string>,
    [language],
  );

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
