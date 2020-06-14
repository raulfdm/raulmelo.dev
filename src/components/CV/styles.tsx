import React from 'react';
import { css, Global } from 'styles/emotion';
import emotionStyled, { CreateStyled } from '@emotion/styled';

export const theme = {
  color: {
    grey: '#DDDDDD',
    black: '#111111',
  },
  font: {
    sans: `'Lora', sans-serif`,
    serif: `'Raleway', serif`,
  },
  sizes: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  },
  pxToRem(px: number): string {
    const basePixel = 16;
    return `${(px / basePixel).toFixed(2)}rem`;
  },
};

export * from 'styles/emotion';
export const styled = emotionStyled as CreateStyled<typeof theme>;

const globalCss = css`
  html,
  body,
  #___gatsby {
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.font.sans};
    font-weight: bold;
  }
  body {
    font-family: ${theme.font.serif};
    color: ${theme.color.black};
    line-height: 1.6;
  }
  a {
    color: ${theme.color.black};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    display: inline;
  }
`;

const printGlobals = css`
  @media print {
    @page {
      margin: 0;
      padding: 0;
      margin: 1cm;
      size: A4;
    }

    html {
      max-width: 21cm;
      font-size: 12px;
      padding: 0;
      margin: 0;
    }

    button {
      display: none !important;
    }
  }
`;

export const GlobalCVStyles = (): JSX.Element => (
  <Global
    styles={css`
      ${printGlobals};
      ${globalCss};
    `}
  />
);
