require('dotenv').config();

const { algoliaSetupOptions } = require('./helpers');

const pluginsList = [
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
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Raul Melo - Site pessoal e Blog`,
      short_name: `Raul Melo`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#ffffff`,
      display: `minimal-ui`,
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
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
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
  'gatsby-plugin-netlify-cache',
];

if (process.env.NODE_ENV === 'production' && process.env.CI === true) {
  pluginsList.push({
    resolve: `gatsby-plugin-algolia-search`,
    options: algoliaSetupOptions,
  });

  pluginsList.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-160048702-1',
      head: false,
    },
  });
}

module.exports = {
  siteMetadata: {
    title: 'Raul Melo',
    author: 'Raul Melo',
    siteUrl: 'https://raul-melo-medium.netlify.com/',
    profilePic:
      'https://miro.medium.com/fit/c/256/256/1*6jtMoNvX_MHslzBLP4aM9g.jpeg',
    social: {
      twitter: 'https://twitter.com/raul_fdm',
      linkedIn: 'https://www.linkedin.com/in/raulfdm/',
      github: 'https://github.com/raulfdm',
    },
    // description: `Blazing fast modern site generator for React`,
  },
  plugins: pluginsList,
};
