const path = require('path');
const R = require('ramda');

const { tagUri, blogPostUri } = require('../globalShared/utils');

const blogPostComponent = path.resolve('./src/screens/Blog/PageTemplate.tsx');
const tagTemplate = path.resolve('./src/screens/Tag/PageTemplate.tsx');

async function createBlogPost({ graphql, createPage }) {
  const result = await graphql(`
    query BlogPosts {
      posts: allStrapiPosts(sort: { fields: date, order: DESC }, limit: 1000) {
        nodes {
          ...BlogPost
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
            slug
            language
            subtitle
            copy: serie_copy
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
      language
      translation {
        language
        slug
      }
      serie: post_serie {
        slug
        id
      }
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
          body
          excerpt
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
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = R.path(['posts', 'nodes'], result.data);
  const series = R.path(['series', 'nodes'], result.data);

  function getPostSerie(post) {
    if (!post.serie) return null;
    const postSerie = series.find((s) => s.id === post.serie.id);

    postSerie.blogPosts = postSerie.blogPosts.map((blogPost) => ({
      ...blogPost,
      uri: blogPostUri(blogPost.slug, blogPost.language),
    }));

    return postSerie;
  }

  function getPostTranslation(post) {
    if (!post.translation) return null;

    const { slug, language } = post.translation;

    return {
      language,
      postUri: blogPostUri(slug, language),
    };
  }

  posts.forEach((post) => {
    const { slug, language } = post;

    const postUri = blogPostUri(slug, language);

    const pageData = {
      path: postUri,
      component: blogPostComponent,
      context: {
        postUri,
        post,
        serie: getPostSerie(post),
        translation: getPostTranslation(post),
      },
    };

    createPage(pageData);
  });
}

async function createTagPage({ graphql, createPage }) {
  const data = await graphql(`
    query CreateTagPage {
      tags: allStrapiPostTags {
        nodes {
          slug
          name
          posts: blog_posts {
            id
          }
        }
      }
      posts: allStrapiPosts(sort: { fields: date, order: DESC }, limit: 1000) {
        nodes {
          ...BlogPost
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
  `);

  const posts = R.path(['data', 'posts', 'nodes'], data);
  const tags = R.path(['data', 'tags', 'nodes'], data);

  function attachFullPostToTagsPost(tag) {
    const postsForThisTag = tag.posts.map((tagPost) => {
      return posts.find((post) => post.id === tagPost.id);
    });

    tag.posts = postsForThisTag;

    return tag;
  }

  const tagsWithPosts = tags
    .filter((tag) => !R.isEmpty(tag.posts))
    .map(attachFullPostToTagsPost);

  tagsWithPosts.forEach((tag) => {
    createPage({
      path: tagUri(tag.slug),
      component: tagTemplate,
      context: {
        posts: tag.posts,
        tag: R.pick(['slug', 'name'], tag),
      },
    });
  });
}

module.exports = {
  createBlogPost,
  createTagPage,
  /**
   * I only export this template because it's used in the tests.
   * If I hardcoded this value, in the CI environment it'll fail because
   * the remote path won't match within the hardcoded.
   */
  tagTemplate,
};
