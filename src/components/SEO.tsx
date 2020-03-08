import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type SEOProps = {
  title: string;
  description: string;
  lang: string;
  slug?: string;
  img?: string;
  meta?: { name: string; content: string }[];
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  meta = [],
  lang,
  img,
  slug,
}) => {
  const {
    site: {
      siteMetadata: { title: officialTitle, author, siteUrl },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          title
          social {
            github
            linkedIn
            twitter
          }
        }
      }
    }
  `);

  const url = `${siteUrl}${slug ? slug : ''}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={officialTitle}
      titleTemplate={title ? `%s | ${title}` : ''}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: 'og:url',
          content: url,
        },

        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]
        .concat(
          img
            ? [
                {
                  property: `og:image`,
                  content: img,
                },
                {
                  name: `twitter:image:src`,
                  content: img,
                },
              ]
            : [],
        )
        .concat(meta)}
    />
  );
};

export default SEO;
