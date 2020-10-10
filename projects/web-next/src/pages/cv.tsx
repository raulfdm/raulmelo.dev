import { CvPage } from '@screens/CV/CvPage';
import { CvDocument, CvQuery } from '@screens/CV/cv.graphql';
import { theme } from '@screens/CV/styled';
import { initializeApollo } from 'src/lib/apolloClient';
import { ThemeProvider } from 'styled-components';

const Home: React.FC<{ data: CvQuery }> = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <CvPage {...data} />
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
      data: apolloClient.cache.extract().ROOT_QUERY,
    },
    revalidate: 1,
  };
}

export default Home;
