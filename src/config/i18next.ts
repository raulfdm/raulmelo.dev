import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

/* Since we're gonna get locales from injected on `gatsby-node`, we don't need a backend to load data */
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'pt-BR',
    // debug: true,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      wait: true,
      useSuspense: false, // THIS IS VERY IMPORTANT TO MAKE IT WORK!!!!
    },
  });
export { i18n };
