module.exports = {
  tagUri(tag) {
    return `/tags/${tag}`;
  },
  blogPostUri(slug, language) {
    const langSlug = language === 'pt' ? slug : `en/${slug}`;
    const blogSlug = `/blog/${langSlug}`;

    return blogSlug;
  },
};
