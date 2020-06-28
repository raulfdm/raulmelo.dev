const path = require('path');
const R = require('ramda');

const blogPostComponent = path.resolve('./src/templates/blog-post.tsx');
const tagTemplate = path.resolve('./src/templates/tag.tsx');

const { getSeriesPost, seriesPath } = require('./series');

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
              commonSlug
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

  const postSeriesAvailable = getSeriesPost(posts);

  posts.forEach((post) => {
    const { fields } = post.node;

    const pageData = {
      path: fields.slug,
      component: blogPostComponent,
      context: {
        post,
        slug: fields.slug,
        series: null,
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
              commonSlug
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
};
