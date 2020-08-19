const path = require('path');
const crypto = require('crypto');

const { PROJECT_DIR_NAME } = require('./globals');

const BLOGS_PATH = path.resolve(PROJECT_DIR_NAME, '../blog');
const DEFAULT_LANG = 'pt';

function getFileLanguageForSlug(fileName) {
  return fileName.split('.')[1] || DEFAULT_LANG;
}

const createFields = ({ node, actions, createNodeId }) => {
  const { createNodeField } = actions;

  function handleMdx() {
    const fileName = path.basename(node.fileAbsolutePath, `.mdx`);

    const postDirectoryPath = path.dirname(node.fileAbsolutePath);

    /* if it's translated, will be "index.<locale-prefix>" (e.g. index.en) */
    const isDefaultLanguage = fileName === 'index';
    const postLang = getFileLanguageForSlug(fileName);

    /* Gets the relative nested folder path */
    const postPath = path
      .relative(BLOGS_PATH, postDirectoryPath)
      /* This is hacky but it'll be fixed as soon I migrate all posts to strapi */
      .replace('../web/blog/', '');

    const localePath = isDefaultLanguage ? '' : `${postLang}/`;
    const blogPostFolderPath = `/blog/${localePath}${postPath}`;

    createNodeField({
      node,
      name: `slug`,
      value: blogPostFolderPath,
    });

    /* lang is used to avoid showing twice a post which has translation */
    createNodeField({
      node,
      name: `lang`,
      value: postLang,
    });

    /* postFolderName is used to group translated versions of the same post */
    createNodeField({
      node,
      name: `postFolderName`,
      value: postPath,
    });
  }

  //https://github.com/strapi/gatsby-source-strapi/issues/89#issuecomment-559731259
  function handleStrapi() {
    const newNode = {
      id: createNodeId(`StrapiUsesContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || ' ',
        type: 'StrapiUsesContent',
        mediaType: 'text/markdown',
        contentDigest: crypto
          .createHash('md5')
          .update(node.content || ' ')
          .digest('hex'),
      },
    };

    actions.createNode(newNode);
    actions.createParentChildLink({
      parent: node,
      path: '',
      child: newNode,
    });
  }

  /**
   * Here I have to check if fileAbsolutePath because of in "handleStrapi" fn,
   * it created a MDX node but not from a local file but via API (string format)
   *
   * When handling this data there, it puts into MDX umbrella and it pass
   * both API content and File content in the same pipeline (which it's wrong).
   *
   * It might be changed in the future when I migrate even the posts to strapi
   * but them it'll be necessary rethinking the fields creation.
   */
  if (node.internal.type === `Mdx` && node.fileAbsolutePath) {
    handleMdx();
  }

  if (node.internal.type === 'StrapiUses') {
    handleStrapi();
  }
};

module.exports = {
  createFields,
  BLOGS_PATH,
  DEFAULT_LANG,
};
