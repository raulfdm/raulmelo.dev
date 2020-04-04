import React from 'react';
import * as R from 'ramda';
import { graphql } from 'gatsby';
import { HomeTemplate } from '../templates/home';

import { GraphQLResponse, SiteMetadata } from '../types';

const Home: React.FC<GraphQLResponse> = ({ data }) => {
  if (!data.site) {
    throw new Error('Home: site info is empty');
  }

  const { profilePic, social, author } = R.path(
    ['site', 'siteMetadata'],
    data,
  ) as SiteMetadata;

  const postEdges = R.path(['allMarkdownRemark', 'edges'], data);

  return (
    <HomeTemplate
      profilePic={profilePic}
      author={author}
      social={social}
      postEdges={postEdges}
    />
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
