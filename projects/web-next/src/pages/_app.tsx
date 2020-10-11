import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { createGlobalStyle } from 'styled-components';

import { useApollo } from '@lib/apolloClient';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default App;
