import { AppProps } from 'next/dist/next-server/lib/router/router';
import { createGlobalStyle } from 'styled-components';
import App from 'next/app';

import { parseAcceptLanguage } from '@utils/headers';
import { LocalizationProvider } from '@contexts/react-intl';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

const MyApp = ({ Component, pageProps, language }: AppProps) => {
  return (
    <LocalizationProvider lang={language}>
      <GlobalStyles />
      <Component {...pageProps} />
    </LocalizationProvider>
  );
};

const getInitialProps: typeof App.getInitialProps = async (appContext) => {
  const {
    ctx: { req },
  } = appContext;

  const langs = parseAcceptLanguage(req?.headers['accept-language'] ?? 'en');

  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    language: langs[0],
  };
};

MyApp.getInitialProps = getInitialProps;

export default MyApp;
