import Head from 'next/head';

import { Info } from '@screens/CV/components/Info';
import { CVMain } from './components/UI';
import { GlobalCVStyles } from './styled';
import { CvQuery } from './cv.graphql';

export const CvPage: React.FC<CvQuery> = ({ personalInformation, social }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalCVStyles />
      <CVMain>
        <Info {...personalInformation} {...social} />
      </CVMain>
    </>
  );
};
