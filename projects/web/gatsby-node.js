/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFields, createBlogPost, createTagPage } = require('./helpers');

/* Custom Fields */
exports.onCreateNode = createFields;

/**
 * This page creation is ONLY needed to automatically generate
 * all blog and tag pages within data from query. Check the methods to see
 * it in depth.
 *
 * All the other existing pages are created by src/pages/x
 * and have their own queries and logic.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await Promise.all([
    createBlogPost({ graphql, createPage }),
    createTagPage({ graphql, createPage }),
  ]);
};
