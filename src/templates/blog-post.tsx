import React from 'react';
import { css, createGlobalStyle } from 'styled-components';

import Layout from '../components/Layout';
import HasTranslationBox from '../components/HasTranslationBox';

type PostProps = {
  pageContext: {
    title: string;
    html: string;
    translatedLinks: {
      locale: string;
      slug: string;
    }[];
  };
};

const global = css`
  body {
    line-height: 1.58;
    font-family: ${({ theme }) => theme.font.contentSerif};
    font-size: 2.1rem;
    word-break: break-word;
  }
  h1 {
    font-size: 4rem;
    font-family: ${({ theme }) => theme.font.contentTitle};
    line-height: 4.8rem;
  }
  p {
    letter-spacing: -0.084px;
    margin-bottom: -8.28px;
    margin-top: 42px;
    font-style: normal;
    font-weight: 400;
    text-rendering: optimizelegibility;
  }

  article {
    a {
      color: inherit;
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.84) 100%,
        rgba(0, 0, 0, 0.84) 0
      );
      background-size: 1px 1px;
      background-position: 0 calc(1em + 1px);
      background-repeat: repeat-x;
    }
  }
  blockquote {
    margin-left: -2rem;
    padding-left: 2.3rem;
    box-shadow: inset 3px 0 0 0 rgba(0, 0, 0, 0.84);
    p {
      font-style: italic;
    }
  }

  hr {
    border-style: none;
    font-size: 28px;
    font-weight: 300;
    margin-top: 30px;
    text-align: center;
  }

  hr::before {
    content: '...';
    letter-spacing: 0.6em;
    text-indent: 0.6em;
    line-height: 1.4;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.font.contentSans};
  }

  h2 {
    font-size: 3.4rem;
    font-weight: 600;
  }
`;

const BlogStyle = createGlobalStyle`
  ${global}
`;

const Post = ({ pageContext }: PostProps) => {
  const { title, html, translatedLinks } = pageContext;

  return (
    <Layout>
      <BlogStyle />
      <h1>{title}</h1>
      <HasTranslationBox translatedLinks={translatedLinks} />

      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default Post;
