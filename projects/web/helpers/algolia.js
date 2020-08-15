const myQuery = `{
  posts: allMdx(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 1000,
    filter: { fileAbsolutePath: { regex: "//blog//" } }
  ) {
    edges {
      node {
        objectID: id
        timeToRead
        excerpt(pruneLength: 5000)
        fields {
          slug
          lang
          postFolderName
        }
        frontmatter {
          date
          title
          subtitle
          description
        }
      }
    }
  }
}`;

/* TODO: add Test */
const flattenData = (data) =>
  data.map(({ node: { frontmatter, ...rest } }) => {
    const { series, subtitle, ...frontmatterData } = frontmatter;

    const nextSubtitle = series
      ? `${series.copy} ${series.index}: ${subtitle}`
      : subtitle;

    return {
      ...frontmatterData,
      subtitle: nextSubtitle,
      date_timestamp: (new Date(frontmatterData.date).getTime() / 1000).toFixed(
        0,
      ),
      ...rest,
    };
  });

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => flattenData(data.posts.edges),
    indexName: 'posts', // overrides main index name, optional
    settings: {
      // optional, any index settings
      attributesToSnippet: ['excerpt:20'],
    },
  },
];

module.exports.algoliaSetupOptions = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  apiKey: process.env.ALGOLIA_ADMIN_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
  queries,
  chunkSize: 10000,
  enablePartialUpdates: true,
  matchFields: ['slug', 'modified'],
};
