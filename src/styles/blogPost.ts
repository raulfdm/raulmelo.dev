import { css, createGlobalStyle } from 'styled-components';

import Typography from 'typography';

const baseFontSize = '21px';

export function pxToRem(px: string | number): string {
  const baseNumber = parseInt(baseFontSize);
  const pxInNumber = parseInt(px.toString());
  return `${pxInNumber / baseNumber}rem`;
}

export const typography = new Typography({
  baseFontSize,
  baseLineHeight: 1.58,
  includeNormalize: true,
  headerFontFamily: [
    'medium-content-sans-serif-font',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['medium-content-serif-font', 'Georgia', 'serif'],
  bodyColor: 'var(--font)',
  overrideStyles: ({ rhythm, adjustFontSizeTo }) => ({
    h1: {
      ...adjustFontSizeTo('42px'),
      marginBottom: pxToRem(10),
      fontWeight: 400,
      fontFamily: 'medium-content-title-font',
    },
    'h2,h3,h4,h5,h6': {
      marginBottom: rhythm(1 / 2),
    },
    p: {
      lineHeight: rhythm(1),
    },
    blockquote: {
      marginLeft: '-20px',
      paddingLeft: '23px',
      boxShadow: `inset 3px 0 0 0 var(--font)`,
    },
    'blockquote > p': {
      fontStyle: 'italic',
    },
    'hr, .post-divider': {
      position: 'relative',
      fontStyle: 'italic',
      fontSize: '28px',
      fontWeight: '300',
      marginTop: '0',
      height: '39px',
      backgroundColor: 'transparent',
      textAlign: 'center',
      transform: 'translateX(-71px)',
    },
    '.gatsby-resp-image-figcaption,.gif-caption': {
      ...adjustFontSizeTo('16px'),
      fontFamily: 'medium-content-sans-serif-font',
      textAlign: 'center',
      margin: 0,
      marginTop: adjustFontSizeTo('16px').fontSize,
      opacity: 0.6,
    },
  }),
});

const global = css`
  html {
    --font-size: 16px;
  }
  ${typography.toString()};

  body {
    font: unset;
  }

  hr,
  .post-divider {
    &::before {
      content: '...';
      letter-spacing: 0.6em;
      text-indent: 0.6em;
      line-height: 1.4;
      position: absolute;
      top: -13%;
    }
  }

  /* Set back  */
  a {
    text-decoration: underline solid ${({ theme }) => theme.color.font};
  }

  .twitter-tweet {
    margin: ${typography.adjustFontSizeTo('40px').fontSize} auto !important;
  }
`;

export const BlogGlobalStyle = createGlobalStyle`
  ${global}
`;
