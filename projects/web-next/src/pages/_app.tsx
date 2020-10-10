import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default App;
