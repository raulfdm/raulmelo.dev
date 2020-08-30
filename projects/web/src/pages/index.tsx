import React from 'react';
import * as R from 'ramda';
import { graphql } from 'gatsby';

import HomeTemplate from '@screens/Home/PageTemplate';
import {
  StrapiPostsConnection,
  StrapiPosts,
  StrapiPostTags,
} from '@app-types/graphql';

type HomeProps = {
  data: {
    allStrapiPosts: StrapiPostsConnection;
  };
};

const Home: React.FC<HomeProps> = ({ data }) => {
  const posts = R.path(['posts', 'nodes'], data) as StrapiPosts[];
  const tags = R.path(['tags', 'nodes'], data) as StrapiPostTags[];

  const store = {
    posts,
    tags,
  };

  return (
    <HomeTemplate
      pageContext={{
        store,
      }}
    />
  );
};

export const query = graphql`
  query BlogPosts {
    posts: allStrapiPosts(sort: { fields: date, order: DESC }, limit: 1000) {
      nodes {
        ...BlogPost
      }
    }
    tags: allStrapiPostTags {
      nodes {
        id: strapiId
        slug
        name
      }
    }
  }

  fragment BlogPost on StrapiPosts {
    id: strapiId
    title
    subtitle
    description
    date
    serie_copy
    slug
    translation {
      language
      slug
    }
    post_serie {
      slug
      id
      name
    }
    language
    featured_image {
      childImageSharp {
        original {
          src
        }
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
          originalImg
          aspectRatio
        }
      }
    }
    childStrapiPostContent {
      childMdx {
        timeToRead
      }
    }
    post_tags {
      id
      name
      slug
    }
  }
`;

export default Home;
