/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFields, createBlogPost, createYearPage } = require('./helpers');

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

  await createBlogPost({ graphql, createPage });
  await createYearPage({ graphql, createPage });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: 'html-loader',
            },
            {
              loader: 'markdown-loader',
            },
          ],
        },
      ],
    },
  });
};
