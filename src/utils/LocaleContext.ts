import { createContext } from 'react';

type LocaleContext = {
  locale: string;
};

export const LocaleContext = createContext({ locale: '' });
export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;

LocaleContext.displayName = 'LocaleContext';
