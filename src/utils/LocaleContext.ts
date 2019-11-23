import { createContext } from 'react';
import i18next from 'i18next';

import { SupportedLocales } from '../locales';

type LocaleContext = {
  locale: string;
  resources: object;
};

export const LocaleContext = createContext({ locale: '', resources: {} });
export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;

LocaleContext.displayName = 'LocaleContext';

export const useLocale = () => {
  function changeLocale(locale: SupportedLocales) {
    i18next.changeLanguage(locale);
    document.querySelector('html').setAttribute('lang', locale);
  }

  return { changeLocale, SupportedLocales };
};
