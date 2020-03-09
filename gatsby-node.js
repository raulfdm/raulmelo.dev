/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const R = require('ramda');
const { getSeriesPost, seriesPath, createFields } = require('./helpers');

/* Custom Fields */
exports.onCreateNode = createFields;

/**
 * This page creation is ONLY need to automatically generate
 * all blog pages whitin the data queries.
 * All the other existing pages are created by src/pages/x
 * and have their own queries and logic
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
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
};
