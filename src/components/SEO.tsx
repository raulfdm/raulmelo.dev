import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { defineMessages } from 'react-intl';

import { useIntl } from '../context/react-intl';

type SEOProps = {
  title?: string;
  description?: string;
  slug?: string;
  img?: string;
  meta?: { name: string; content: string }[];
};

const messages = defineMessages({
  title: {
    id: 'siteData.title',
  },
  description: {
    id: 'siteData.description',
  },
});

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  meta = [],
  img,
  slug,
}) => {
  const { locale, formatMessage } = useIntl();
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

  const metaUrl = `${siteUrl}${slug ? slug : ''}`;
  const metaIrlUrl = `${siteUrl}${img}`;
  const metaTitle = title || formatMessage(messages.title);
  const metaDescription = description || formatMessage(messages.description);

  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
      }}
      title={officialTitle}
      titleTemplate={`%s | ${metaTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: 'og:url',
          content: metaUrl,
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
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          img
            ? [
                {
                  property: `og:image`,
                  content: metaIrlUrl,
                },
                {
                  name: `twitter:image:src`,
                  content: metaIrlUrl,
                },
              ]
            : [],
        )
        .concat(meta)}
    />
  );
};

export default SEO;
