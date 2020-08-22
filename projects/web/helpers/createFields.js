const crypto = require('crypto');

const createFields = ({ node, actions, createNodeId }) => {
  //https://github.com/strapi/gatsby-source-strapi/issues/89#issuecomment-559731259
  function handleStrapi(prefix) {
    const newNode = {
      id: createNodeId(`${prefix}-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || ' ',
        type: prefix,
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

  if (node.internal.type === 'StrapiPosts') {
    handleStrapi('StrapiPostContent');
  }

  if (node.internal.type === 'StrapiUses') {
    handleStrapi('StrapiUsesContent');
  }
};

module.exports = {
  createFields,
};
