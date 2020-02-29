/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const R = require('ramda');
const { getSeriesPost, seriesPath } = require('./helpers');

const DEFAULT_LOCALE = 'pt-br';

const BLOGS_PATH = path.resolve(__dirname, './blog');

/* All file names at src/locales/ */

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // Use path.basename
    // https://nodejs.org/api/path.html#path_path_basename_path_ext
    const fileName = path.basename(node.fileAbsolutePath, `.md`);
    /* Will be a absolute path to blog/* (e.g. <project-path>/blog/setup-react-project/ ) */
    const postDirectoryPath = path.dirname(node.fileAbsolutePath);
    /* Gets the relative nested folder path */
    const folderPath = `/${path.relative(BLOGS_PATH, postDirectoryPath)}`;
    /* if it's translated, will be index.<locale-prefix> (e.g. index.en) */
    const isDefaultLocaleBlog = fileName === 'index';

    const fileLocale = isDefaultLocaleBlog
      ? DEFAULT_LOCALE
      : fileName.split('.')[1]; /* index.en => en */

    createNodeField({
      node,
      name: `slug`,
      value: folderPath,
    });

    createNodeField({
      node,
      name: `localizedSlug`,
      value: `/${fileLocale}${folderPath}`,
    });

    createNodeField({ node, name: `locale`, value: fileLocale });

    createNodeField({
      node,
      name: `postDirectoryPath`,
      value: postDirectoryPath,
    });
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
            htmlAst
            timeToRead
            frontmatter {
              title
              subtitle
              date
              categories
              image {
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
              series {
                copy
                id
                index
              }
            }
            fileAbsolutePath
            fields {
              locale
              slug
              localizedSlug
              postDirectoryPath
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

  /* It's important to notice that post X locale is 1->n
  1 post could have n translations.

  Otherwise it'll have the same posts but in different languages
  */
  const postsGroupedBySlug = R.groupBy((post) => post.node.fields.slug, posts);

  /* Tuple of {dirname, posts} */
  const postEntries = Object.entries(postsGroupedBySlug);

  const postSeriesAvailable = getSeriesPost(posts);

  postEntries.forEach(([slug, posts], index) => {
    const previousIndex = index - 1;
    const nextIndex = index + 1;

    const previousPost = postEntries[previousIndex]
      ? postEntries[previousIndex][1] // position 1 matches for post list
      : null;

    const nextPost = postEntries[nextIndex]
      ? postEntries[nextIndex][1] // position 1 matches for post list
      : null;

    /* TODO: Extract this into a separeted function */
    const postByLocale = posts.reduce((acc, post) => {
      acc[post.node.fields.locale] = post;
      return acc;
    }, {});

    const entries = Object.entries(postByLocale);

    /* TODO: Change that implementation */
    entries.forEach(([locale, post]) => {
      const localizedSlug = `/${locale}${slug}`;

      const pageData = {
        path: localizedSlug,
        component: blogPostComponent,
        context: {
          postByLocale,
          localizedSlug,
          slug,
          previous: previousPost,
          next: nextPost,
          series: null,
        },
      };

      const seriesInfo = R.path(seriesPath, post);

      if (seriesInfo) {
        const { id } = seriesInfo;
        pageData.context.series = postSeriesAvailable[id];
      }

      createPage(pageData);
    });
  });
};
