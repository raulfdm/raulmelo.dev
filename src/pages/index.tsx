import React from 'react';
import * as R from 'ramda';
import { graphql } from 'gatsby';

import HomeTemplate from '../templates/home';
import { GraphQLResponse, PostEdges } from '../types';

const Home: React.FC<GraphQLResponse> = ({ data }) => {
  const postEdges = R.path(['allMdx', 'edges'], data) as PostEdges;

  return (
    <HomeTemplate
      pageContext={{
        postEdges,
      }}
    />
  );
};

export const query = graphql`
  {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: { fileAbsolutePath: { regex: "//blog//" } }
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
            tags
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
            postFolderName
          }
        }
      }
    }
  }
`;

export default Home;
