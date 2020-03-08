import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { useIntl } from '../context/react-intl';

type SEOProps = {
  title?: string;
  description?: string;
  slug?: string;
  img?: string;
  meta?: { name: string; content: string }[];
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  meta = [],
  img,
  slug,
}) => {
  const { locale } = useIntl();
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
  const imgUrl = `${siteUrl}${img}`;

  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
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
                  content: imgUrl,
                },
                {
                  name: `twitter:image:src`,
                  content: imgUrl,
                },
              ]
            : [],
        )
        .concat(meta)}
    />
  );
};

export default SEO;
