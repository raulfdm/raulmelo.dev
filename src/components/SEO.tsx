import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { getCanonicalLink } from '@utils/seo';
import defaultImage from '../../static/me.jpg';

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  url: string;
  lang: string;
  isBlogPost?: boolean;
  setCanonical?: boolean;
};

const SEO: React.FC<SEOProps> = (props) => {
  const {
    site: {
      siteMetadata: { social, siteUrl },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          social {
            twitter
          }
        }
      }
    }
  `);

  const {
    title,
    description,
    url,
    image,
    lang,
    isBlogPost = false,
    setCanonical = true,
    children,
  } = props;

  const metaImg = `${siteUrl}${image || defaultImage}`;
  const metaUrl = getCanonicalLink({ siteUrl, uri: url });

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={metaImg} />
      {setCanonical && <link rel="canonical" href={metaUrl} />}

      {/* OpenGraph tags */}
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImg} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImg} />
      <meta name="twitter:image" content={metaImg} />

      {children}
    </Helmet>
  );
};

export default SEO;
