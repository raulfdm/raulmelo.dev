import { createContext } from 'react';

type LocaleContext = {
  locale: string;
  resources: object;
};

export const LocaleContext = createContext({ locale: '', resources: {} });
export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;

LocaleContext.displayName = 'LocaleContext';
