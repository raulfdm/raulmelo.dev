import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, defineMessages } from 'react-intl';
import { graphql } from 'gatsby';
import mediaQuery from 'styled-media-query';

import Layout from '../components/Layout';
import { GraphQLResponse, PostEdge } from '../types';
import AuthorPresentation from '../components/AuthorPresentation';
import { PostCard } from '../components/PostCard';
import { getAndSanitizePostsFromQueryResponse } from '../helpers/posts';
import { useIntl } from '../context/react-intl';
import SEO from '../components/SEO';

const LatestMessage = styled.p`
  letter-spacing: -0.32px;
  font-size: 2.1rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.contentSans};
  padding-bottom: 1.2rem;
`;

const StyledAuthorPresentation = styled(AuthorPresentation)`
  margin-bottom: 3rem;
`;

const messages = defineMessages({
  description: {
    id: 'siteData.description',
  },
  title: {
    id: 'siteData.title',
  },
});

const Home: React.FC<GraphQLResponse> = ({ data }) => {
  const { locale, formatMessage } = useIntl();

  const posts = getAndSanitizePostsFromQueryResponse({
    data,
    preferredLang: locale,
  });

  const { profilePic, social, author } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO
        description={formatMessage(messages.description)}
        title={formatMessage(messages.title)}
      />
      <main>
        <StyledAuthorPresentation
          name={author}
          profilePic={profilePic}
          twitter={social.twitter}
          linkedIn={social.linkedIn}
          github={social.github}
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
                fluid(quality: 60, maxWidth: 700, fit: CONTAIN) {
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
    site {
      siteMetadata {
        profilePic
        author
        siteUrl
        social {
          github
          linkedIn
          twitter
        }
      }
    }
  }
`;

export default Home;
