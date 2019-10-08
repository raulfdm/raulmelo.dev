import React from 'react';
import Layout from '../components/Layout';

import { css, createGlobalStyle } from 'styled-components';

const global = css`
  body {
    line-height: 1.58;
    font-family: ${({ theme }) => theme.font.contentSerif};
    font-size: 1.8rem;
  }
  h1 {
    font-size: 4rem;
    font-family: ${({ theme }) => theme.font.contentTitle};
    line-height: 4.8rem;
  }
  p {
    letter-spacing: -0.072px;
    margin-bottom: -8.28px;
    margin-top: 2.808rem;
    font-style: normal;
    font-weight: 400;
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
`;

const BlogStyle = createGlobalStyle`
  ${global}
`;

const Post = ({ pageContext, ...props }) => {
  const { title } = pageContext;

  return (
    <Layout>
      <BlogStyle />
      <h1>{title}</h1>
      <article dangerouslySetInnerHTML={{ __html: pageContext.html }} />
    </Layout>
  );
};

export default Post;
