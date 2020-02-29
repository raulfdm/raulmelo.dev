require('dotenv').config();

const myQuery = `{
  posts: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 1000
  ) {
    edges {
      node {
        objectID: id
        timeToRead
        excerpt(pruneLength: 5000)
        fields {
          locale
          slug
          localizedSlug
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

module.exports = {
  /* TODO: Fix that */
  siteMetadata: {
    title: `Gatsby`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    /* Resolve markdown -> html */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 780,
              // https://github.com/gatsbyjs/gatsby/issues/20000
              // markdownCaptions: true,
              showCaptions: true,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill="currentColor" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `copy-title-icon`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`en`, `pt-br`],
        defaultLanguage: `pt-br`,
        // redirect: true,
        // redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
        matchFields: ['slug', 'modified'],
      },
    },
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        aliases: {
          env: `bash`,
          gitignore: `none`,
          gql: `graphql`,
          mdx: `markdown`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fira Code'],
        },
      },
    },
  ],
};
