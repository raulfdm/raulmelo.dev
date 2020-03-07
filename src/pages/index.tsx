import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { GraphQLAllMarkdownRemarkResponse, PostEdge } from '../types';
import AuthorPresentation from '../components/AuthorPresentation';
import { PostCard } from '../components/PostCard';
import { getAndSanitizePostsFromQueryResponse } from '../helpers/posts';
import { useIntl } from '../context/react-intl';

const LatestMessage = styled.p`
  letter-spacing: -0.32px;
  font-size: 2.1rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.contentSans};
  padding-top: 4rem;
  padding-bottom: 1.2rem;
`;

const StyledAuthorPresentation = styled(AuthorPresentation)`
  margin-bottom: 3rem;
`;

const Home: React.FC<GraphQLAllMarkdownRemarkResponse> = ({ data }) => {
  const { locale } = useIntl();

  const posts = getAndSanitizePostsFromQueryResponse({
    data,
    preferredLang: locale,
  });

  return (
    <Layout>
      <main>
        <StyledAuthorPresentation
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
        {posts &&
          posts.map(({ node }: PostEdge) => (
            <PostCard key={node.id} postNode={node} />
          ))}
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            subtitle
            date
            categories
            description
            image {
              childImageSharp {
                fluid(quality: 100, maxWidth: 1500, fit: CONTAIN) {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  presentationWidth
                  presentationHeight
                  originalName
                  originalImg
                  aspectRatio
                }
              }
            }
          }
          fileAbsolutePath
          fields {
            slug
            lang
            commonSlug
          }
        }
      }
    }
  }
`;

export default Home;
