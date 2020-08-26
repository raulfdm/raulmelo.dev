import React from 'react';
import * as R from 'ramda';
import { graphql } from 'gatsby';

import HomeTemplate from '@screens/Home/PageTemplate';
import {
  StrapiPostsConnection,
  StrapiPosts,
  StrapiPostTags,
  StrapiPostSerie,
} from '@app-types/graphql';
import { PostsStore } from '@screens/Home/stores';

type HomeProps = {
  data: {
    allStrapiPosts: StrapiPostsConnection;
  };
};

const store = PostsStore.create({
  activeFilter: 'all',
  apiData: {},
});

const Home: React.FC<HomeProps> = ({ data }) => {
  const posts = R.path(['posts', 'nodes'], data) as StrapiPosts[];
  const tags = R.path(['tags', 'nodes'], data) as StrapiPostTags[];
  const series = R.path(['series', 'nodes'], data) as StrapiPostSerie[];

  store.apiData.setPosts(posts);
  store.apiData.setTags(tags);
  store.apiData.setSeries(series);

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
    series: allStrapiPostSerie(
      sort: { order: ASC, fields: blog_posts___date }
    ) {
      nodes {
        id: strapiId
        name
        slug
        blogPosts: blog_posts {
          id
        }
      }
    }
  }

  fragment BlogPost on StrapiPosts {
    id: strapiId
    title
    subtitle
    description
    date
    serieCopy: serie_copy
    slug
    translation {
      language
      slug
    }
    serie: post_serie {
      slug
      id
    }
    language
    featuredImage: featured_image {
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
    serie: post_serie {
      name
      slug
    }
    tags: post_tags {
      id
      name
      slug
    }
  }
`;

export default Home;
