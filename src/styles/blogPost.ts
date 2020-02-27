import { css, createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

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
        ${({ theme }) => theme.color.font} 100%,
        ${({ theme }) => theme.color.font} 0
      );
      background-size: 1px 1px;
      background-position: 0 calc(1em + 1px);
      background-repeat: repeat-x;
    }
  }

  blockquote {
    margin-left: -2rem;
    padding-left: 2.3rem;
    box-shadow: inset 3px 0 0 0 ${({ theme }) => theme.color.font};
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
    line-height: 1;
  }

  h2 {
    font-size: 3.4rem;
    font-weight: 600;
  }

  h1 + p,
  h2 + p,
  h3 + p,
  h4 + p,
  h5 + p,
  h6 + p {
    margin-top: 1.2rem;
    ${media.greaterThan('small')`
      margin-top: 1.8rem;
    `}
  }

  p + h1,
  p + h2,
  p + h3,
  p + h4,
  p + h5,
  p + h6,
  .gif-wrapper {
    margin-top: 2.2rem;
    ${media.greaterThan('small')`
      margin-top: 3rem;
    `}
  }

  a {
    text-decoration: ${({ theme }) => theme.color.font};
  }

  .twitter-tweet {
    margin: 4rem auto !important;
  }

  .gatsby-resp-image-figcaption,
  .gif-caption {
    font-family: ${({ theme }) => theme.font.contentSans};
    text-align: center;
    margin: 0;
    margin-top: 1rem;
    line-height: 1.4;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.font};
    opacity: 0.6;
  }
`;

export const BlogGlobalStyle = createGlobalStyle`
  ${global}
`;
