import React from 'react';
import styled from 'styled-components';
import { defineMessages } from 'react-intl';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { GraphQLResponse } from '../types';
import AuthorPresentation from '../components/AuthorPresentation';
import { getAndSanitizePostsFromQueryResponse } from '../components/Home/helpers/posts';
import { useIntl } from '../context/react-intl';
import SEO from '../components/SEO';
import { Filter } from '../components/Home/Filter';
import { PostFilters } from '../components/Home/types';
import { Posts } from '../components/Home/Posts';

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
  const [filter, setFilter] = React.useState<PostFilters>('all');

  const posts = getAndSanitizePostsFromQueryResponse({
    data,
    preferredLang: locale,
  });

  if (!data.site) {
    throw new Error('Home: site info is empty');
  }

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
        <Filter setFilter={setFilter} currentFilter={filter} />
        <Posts posts={posts} filter={filter} />
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
            series {
              id
            }
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
