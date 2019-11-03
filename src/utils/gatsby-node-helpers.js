const { createFilePath } = require(`gatsby-source-filesystem`);

const localizedSlug = ({ isDefault, locale, slug }) =>
  isDefault ? `/${slug}` : `/${locale}/${slug}`;

// Use a little helper function to remove trailing slashes from paths
exports.removeTrailingSlash = path =>
  path === `/` ? path : path.replace(/\/$/, ``);

  
  exports.generateSlug = ({ node, getNode, lang }) => {
    const { default: isDefault } = lang;
    const filePath = createFilePath({ node, getNode }).replace(/index.*/, '');
    
    return isDefault ? filePath : `${lang.path}${filePath}`;
  };
  
  exports.localizedSlug = localizedSlug;