const path = require('path');
const R = require('ramda');

const blogPostComponent = path.resolve('./src/templates/blog-post.tsx');
const tagTemplate = path.resolve('./src/templates/tag.tsx');

const { getSeriesPost, seriesPath } = require('./series');

function bindPostWithItsTranslations(posts) {
  const groupByFolderName = R.groupBy(
    (edge) => edge.node.fields.postFolderName,
  );

  const entries = Object.entries(groupByFolderName(posts));

  function updateEdgeWithTranslations(edge, translations) {
    console.log(translations);
    return {
      node: {
        ...edge.node,
        nonGraphQLData: {
          translations,
        },
      },
    };
  }

  const updatedPosts = entries.reduce((result, [, postsList]) => {
    if (postsList.length === 1) {
      const singlePostEdge = R.head(postsList);
      result.push(updateEdgeWithTranslations(singlePostEdge, null));
    } else {
      /**
       * NOTE
       * This implementation has a limitation for 2 languages.
       * if one day I had more than one then I do need to rethink that
       */
      const first = R.head(postsList);
      const second = R.last(postsList);
      const getFields = R.path(['node', 'fields']);

      const updatedFirst = updateEdgeWithTranslations(first, [
        {
          lang: getFields(second).lang,
          slug: getFields(second).slug,
        },
      ]);

      const updatedSecond = updateEdgeWithTranslations(second, [
        {
          lang: getFields(first).lang,
          slug: getFields(first).slug,
        },
      ]);

      result.push(updatedFirst);
      result.push(updatedSecond);
    }

    return result;
  }, []);

  return updatedPosts;
}

async function createBlogPost({ graphql, createPage }) {
  const result = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "//blog//" } }
      ) {
        edges {
          node {
            id
            body
            excerpt
            timeToRead
            frontmatter {
              title
              subtitle
              date
              tags
              description
              series {
                id
                index
                copy
              }
              image_caption
              image {
                publicURL
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
              postFolderName
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges;

  const postsWithTranslations = bindPostWithItsTranslations(posts);

  const postSeriesAvailable = getSeriesPost(postsWithTranslations);

  postsWithTranslations.forEach((post) => {
    const { fields, nonGraphQLData } = post.node;

    const pageData = {
      path: fields.slug,
      component: blogPostComponent,
      context: {
        post,
        slug: fields.slug,
        series: null,
        ...nonGraphQLData,
      },
    };

    const seriesInfo = R.path(seriesPath, post);

    if (seriesInfo) {
      const { id } = seriesInfo;
      const entireSeries = postSeriesAvailable[id];
      const { context } = pageData;

      pageData.context = {
        ...context,
        series: entireSeries,
      };
    }

    createPage(pageData);
  });
}

async function createTagPage({ graphql, createPage }) {
  const data = await graphql(`
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
  `);

  const edges = R.path(['data', 'allMdx', 'edges'], data);

  const allTags = R.pipe(
    R.map((edge) => edge.node.frontmatter.tags),
    R.flatten,
    R.uniq,
  )(edges);

  const sanitizeTags = R.pipe(
    R.toLower,
    R.replace('/', '-'),
    R.replace(/\s/, '-'),
  );

  const tagsPosts = allTags.reduce((result, tag) => {
    const tagNodes = edges.filter(({ node }) =>
      node.frontmatter.tags.map(R.toLower).includes(tag.toLowerCase()),
    );

    result[tag] = {
      name: sanitizeTags(tag),
      nodes: tagNodes,
    };

    return result;
  }, {});

  Object.entries(tagsPosts).forEach(([, tagPosts]) => {
    createPage({
      path: `/tags/${tagPosts.name}`,
      component: tagTemplate,
      context: {
        postEdges: tagPosts.nodes,
        tag: tagPosts.name,
      },
    });
  });
}

module.exports = {
  createBlogPost,
  createTagPage,
  tagTemplate,
  bindPostWithItsTranslations,
};
