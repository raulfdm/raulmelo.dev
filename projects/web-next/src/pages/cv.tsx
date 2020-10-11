import { ThemeProvider } from 'styled-components';

import { CvPage } from '@screens/CV/CvPage';
import { CvDocument } from '@screens/CV/cv.graphql';
import { theme } from '@screens/CV/styled';
import { initializeApollo } from '@lib/apolloClient';

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CvPage />
    </ThemeProvider>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: CvDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default Home;
