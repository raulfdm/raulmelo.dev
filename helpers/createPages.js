const path = require('path');
const R = require('ramda');

const { getSeriesPost, seriesPath } = require('./series');

async function createBlogPost({ graphql, createPage }) {
  const blogPostComponent = path.resolve('./src/templates/blog-post.tsx');

  const result = await graphql(`
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
            htmlAst
            frontmatter {
              title
              subtitle
              date
              categories
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
  const posts = result.data.allMarkdownRemark.edges;

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

async function createYearPage({ graphql, createPage }) {
  const homeTemplate = path.resolve('./src/templates/home.tsx');

  const data = await graphql(`
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
    }
  `);

  function groupAndCreate(dateGroupPattern) {
    const postsByYear = R.pipe(
      R.path(['data', 'allMarkdownRemark', 'edges']),
      R.groupBy((edge) => dateGroupPattern(edge.node.frontmatter.date)),
    )(data);

    for (let yearPosts of R.toPairs(postsByYear)) {
      const [year, edges] = yearPosts;

      const pageData = {
        path: `/${year}`,
        component: homeTemplate,
        context: {
          postEdges: edges,
        },
      };

      createPage(pageData);
    }
  }

  /* TODO: Test it */
  groupAndCreate((date) => date.substr(0, 4)); // year only (ie. 2020)
  groupAndCreate((date) => date.substr(0, 7).replace('-', '/')); // year + month (ie. 2020-03)
}

module.exports = {
  createBlogPost,
  createYearPage,
};
