import { ApolloProvider } from '@apollo/client';
import { createGlobalStyle } from 'styled-components';
import App from 'next/app';
import flat from 'flat';
import { IntlProvider } from 'react-intl';

import { useApollo } from '@lib/apolloClient';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import enMessages from '../locales/en.json';
import ptMessages from '../locales/pt-br.json';
import { SupportedLanguages } from '@app/types';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

const messages = {
  pt: ptMessages,
  en: enMessages,
};

type MyAppProps = AppProps & {
  language: SupportedLanguages;
};

const MyApp = ({ Component, pageProps, language }: MyAppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  console.log(language);
  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={apolloClient}>
        <IntlProvider locale={language} messages={flat(messages[language])}>
          <Component {...pageProps} />
        </IntlProvider>
      </ApolloProvider>
    </>
  );
};

function getRequestedLocales(request: any): SupportedLanguages {
  const requestedLocales: string | string[] =
    request?.locale ||
    (typeof navigator !== 'undefined' && navigator.languages) ||
    // IE11
    (typeof navigator !== 'undefined' && (navigator as any).userLanguage) ||
    (typeof window !== 'undefined' && (window as any).LOCALE) ||
    'en';

  return requestedLocales as SupportedLanguages;
}

MyApp.getInitialProps = async (appContext: any) => {
  console.log(appContext);

  const { req } = appContext;

  const language = getRequestedLocales(req);

  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    language,
  };
};

export default MyApp;
