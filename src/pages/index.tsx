import React from 'react';
import * as R from 'ramda';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import AuthorPresentation from '../components/AuthorPresentation';
import PostCard from '../components/PostCard';

import { basicPostData } from '../data/posts';

const LatestMessage = styled.p`
  letter-spacing: -0.32px;
  font-size: 2.1rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.contentSans};
  padding-top: 4rem;
  padding-bottom: 1.2rem;
`;

const PageContentWrapper = styled.main`
  .customAuthorPresentation {
    margin-bottom: 3rem;
  }
`;

const Home: React.FC = () => {
  const intl = useIntl();
  const postBySlug = basicPostData();

  return (
    <Layout>
      <PageContentWrapper>
        <AuthorPresentation
          /* TODO: use as styled */
          className="customAuthorPresentation"
          /* TODO: put all those infos into query */
          name="Raul de Melo"
          profilePic="https://miro.medium.com/fit/c/256/256/1*6jtMoNvX_MHslzBLP4aM9g.jpeg"
          twitter="https://twitter.com/raul_fdm"
          linkedIn="https://www.linkedin.com/in/raulfdm/"
          github="https://github.com/raulfdm"
        />
        <LatestMessage>
          <FormattedMessage id="home.latest" />
        </LatestMessage>
        {/* TODO: NOTE TO MYSELF: CONTROL YOURSELF THE PATH WITH LOCALE */}
        {postBySlug.map(([_, postsByLocale]) => {
          /* TODO: Move this into a helper file */

          const singlePostLocale = R.keys(postsByLocale);
          const postForCurrentLocale =
            postsByLocale[intl.locale] ||
            R.path(singlePostLocale, postsByLocale);

          return (
            <PostCard
              key={postForCurrentLocale.id}
              description={postForCurrentLocale.description}
              title={postForCurrentLocale.title}
              date={postForCurrentLocale.date}
              timeToRead={postForCurrentLocale.timeToRead}
              image={postForCurrentLocale.imgSrc}
              slug={postForCurrentLocale.localizedSlug}
            />
          );
        })}
      </PageContentWrapper>
    </Layout>
  );
};

export default Home;
