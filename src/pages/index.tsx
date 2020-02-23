import React from 'react';
import * as R from 'ramda';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { AllMarkdownRemark, PostNode } from '../types/GraphQL';
import AuthorPresentation from '../components/AuthorPresentation';
import { PostCard } from '../components/PostCard';
import { getPostsBySlug } from '../utils/';

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

const Home: React.FC<{ data: AllMarkdownRemark }> = ({ data }) => {
  const intl = useIntl();

  const postBySlug = getPostsBySlug(data.allMarkdownRemark.edges);

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
        {postBySlug.map(([_, postsByLocale]) => {
          /* TODO: Move this into a helper file */
          const singlePostLocale = R.keys(postsByLocale);
          const { node: post }: { node: PostNode } =
            postsByLocale[intl.locale] ||
            R.path(singlePostLocale, postsByLocale);

          return (
            <PostCard
              key={post.id}
              description={post.frontmatter.description}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              timeToRead={post.timeToRead}
              image={post.frontmatter.image.childImageSharp.fluid}
              slug={post.fields.localizedSlug}
            />
          );
        })}
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
            date
            categories
            description
            image {
              childImageSharp {
                fluid {
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
            locale
            slug
            localizedSlug
          }
        }
      }
    }
  }
`;

export default Home;
