/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const R = require('ramda');

const {
  removeTrailingSlash,
  localizedSlug,
  generateSlug,
} = require('./src/utils/gatsby-node-helpers.js');

const { supportedLocales } = require('./i18n');

const DEFAULT_LOCALE = 'ptBr';

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/
  deletePage(page);

  Object.keys(supportedLocales).map(lang => {
    const currentLangOpts = supportedLocales[lang];

    const localizedPath = currentLangOpts.default
      ? page.path
      : `${currentLangOpts.path}${page.path}`;

    return createPage({
      ...page,
      path: removeTrailingSlash(localizedPath),
      context: {
        ...page.context,
        locale: lang,
        dateFormat: currentLangOpts.dateFormat,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // Use path.basename
    // https://nodejs.org/api/path.html#path_path_basename_path_ext
    const name = path.basename(node.fileAbsolutePath, `.md`);

    // Check if post.name is "index" -- because that's the file for default language
    // (In this case "en")
    const isDefault = name === `index`;

    /* TODO: CHANGE THIS */
    /* gets "en" from 'index.en' */
    const lang = isDefault ? DEFAULT_LOCALE : name.split(`.`)[1];

    const currentLocale = supportedLocales[lang];

    const slug = generateSlug({ lang: currentLocale, node, getNode });

    createNodeField({ node, name: `slug`, value: slug });
    createNodeField({ node, name: `locale`, value: lang });
    createNodeField({ node, name: `isDefault`, value: isDefault });
  }
};

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
            html
            timeToRead
            fields {
              slug
              locale
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
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

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    const { fields, html, frontmatter } = post.node;
    const { locale, slug } = fields;

    createPage({
      path: slug,
      component: blogPostComponent,
      context: {
        locale: locale,
        html,
        slug,
        previous,
        next,
        ...frontmatter,
      },
    });
  });
};
