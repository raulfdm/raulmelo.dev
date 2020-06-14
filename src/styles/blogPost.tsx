import React from 'react';
import Typography from 'typography';

import { css, Global } from 'styles/emotion';
import { pandaPrismStyles } from './prims-panda-theme';
import { FONTS, theme } from 'styles/theme';

const baseFontSize = '18px';
const baseFontSizeHigherThanMobile = '18px';

export function pxToRem(px: string | number, mobile = true): string {
  const baseNumber = parseInt(
    mobile ? baseFontSize : baseFontSizeHigherThanMobile,
  );

  const pxInNumber = parseInt(px.toString());
  return `${pxInNumber / baseNumber}rem`;
}

export const typography = new Typography({
  baseFontSize,
  baseLineHeight: 1.58,
  includeNormalize: true,
  headerFontFamily: [
    FONTS.contentSans,
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [FONTS.contentSerif, 'Georgia', 'serif'],
  bodyColor: 'var(--font)',
  overrideStyles: ({ rhythm, adjustFontSizeTo }) => ({
    h1: {
      ...adjustFontSizeTo('42px'),
      marginBottom: pxToRem(10),
      fontWeight: 400,
      fontFamily: 'content-title',
    },
    'h2,h3,h4,h5,h6': {
      marginBottom: rhythm(1 / 2),
    },
    p: {
      lineHeight: rhythm(1),
    },
    '.gatsby-resp-image-figcaption,.gif-caption,.img-caption': {
      ...adjustFontSizeTo('16px'),
      fontFamily: FONTS.contentSans,
      textAlign: 'center',
      margin: 0,
      marginTop: adjustFontSizeTo('16px').fontSize,
      opacity: 0.6,
    },
  }),
});

const blogGlobal = css`
  ${typography.toString()};

  body {
    font: unset;
  }

  a {
    text-decoration: underline solid ${theme.color?.font};
  }

  .twitter-tweet {
    margin: ${typography.adjustFontSizeTo('40px').fontSize} auto !important;
  }

  ${pandaPrismStyles};
`;

export const BlogGlobalStyle = () => <Global styles={blogGlobal} />;
