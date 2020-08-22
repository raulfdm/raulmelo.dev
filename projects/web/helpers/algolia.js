const { blogPostUri } = require('../globalShared/utils');

const myQuery = `
  query BlogPosts {
    posts: allStrapiPosts(sort: {fields: date, order: DESC}, limit: 1000, filter: {is_shown: {eq: true}}) {
      nodes {
        objectID: id
        language
        slug
        date
        title
        subtitle
        description
        childStrapiPostContent {
          childMdx {
            timeToRead
            excerpt(pruneLength: 5000)
          }
        }
      }
    }
  }
`;

/* TODO: add Test */
const normalizeQueryToAlgoliaFormat = ({
  date,
  slug,
  language,
  childStrapiPostContent: {
    childMdx: { excerpt, timeToRead },
  },
  ...rest
}) => {
  return {
    ...rest,
    date,
    slug,
    language,
    excerpt,
    timeToRead,
    postUri: blogPostUri(slug, language),
    date_timestamp: (new Date(date).getTime() / 1000).toFixed(0),
  };
};

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => {
      return data.posts.nodes.map(normalizeQueryToAlgoliaFormat);
    },
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
