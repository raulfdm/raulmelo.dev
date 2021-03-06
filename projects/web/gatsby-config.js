require('dotenv').config();
const R = require('ramda');
const { webpackAliases } = require('./globalShared/aliases');

const { algoliaSetupOptions } = require('./helpers');

const isProduction = R.propEq('NODE_ENV', 'production')(process.env);
console.log('isProduction -->', isProduction);

const plugins = [
  `gatsby-plugin-netlify`,
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-webpack-bundle-analyzer`,
    options: {
      production: isProduction,
    },
  },
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      query: `
        {
          strapiSite {
            url
          }
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
      resolveSiteUrl: ({ strapiSite }) => {
        return strapiSite.url;
      },
    },
  },
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-typescript`,
  `gatsby-transformer-json`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-alias-imports`,
    options: {
      aliases: webpackAliases,
    },
  },
  {
    resolve: `gatsby-plugin-graphql-codegen`,
    options: {
      fileName: `types/graphql-types.ts`,
      documentPaths: ['../../node_modules/gatsby-*/**/*.js'],
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Raul Melo - Site pessoal e Blog`,
      short_name: `Raul Melo`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#ffffff`,
      display: `standalone`,
      icon: `static/logo.png`, // This path is relative to the root of the site.
      localize: [
        {
          lang: `en`,
          name: `Raul Melo - Personal website and Blog`,
          short_name: `Raul Melo`,
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      /* THIS IS WORKAROUND
      https://github.com/gatsbyjs/gatsby/issues/16239#issuecomment-594516446
      */
      remarkPlugins: [require(`remark-unwrap-images`)],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 768,
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
            elements: [`h2`, `h3`, `h4`, `h5`, `h6`],
            maintainCase: false,
            removeAccents: true,
          },
        },
        {
          resolve: 'gatsby-remark-code-titles',
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
        `gatsby-remark-smartypants`,
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: [
          'Fira Code',
          'Merriweather:400,700',
          'Open Sans:300,400,500,700',
        ],
      },
    },
  },
  {
    resolve: `gatsby-source-strapi`,
    options: {
      queryLimit: 1000,
      apiURL: process.env.STRAPI_API_URL || `http://localhost:1337`,
      contentTypes: [`uses`, `posts`, `post-tags`, `post-serie`],
      singleTypes: [`cv`, `personal-information`, `social`, `site`],
    },
  },
];

if (isProduction) {
  plugins.push({
    resolve: `gatsby-plugin-algolia-search`,
    options: algoliaSetupOptions,
  });

  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-160048702-1',
      head: false,
    },
  });

  plugins.push({
    resolve: `gatsby-plugin-web-vitals`,
    options: {
      trackingId: 'UA-160048702-1',
    },
  });
}

module.exports = {
  plugins,
};
