import { css, createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import { pandaPrismStyles } from './prims-panda-theme';

import Typography from 'typography';
import { FONTS } from 'context/theme';

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
    blockquote: {
      fontWeight: 300,
      marginLeft: '-12px',
      paddingLeft: '23px',
      boxShadow: `inset 3px 0 0 -1px var(--font)`,
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

const fontSizeInPercenetage = (desiredPx: string): string => {
  const defaultBrowserFontSize = 16;
  const desiredNumber = parseInt(desiredPx.replace('px', ''));

  const result = (desiredNumber * 100) / defaultBrowserFontSize;

  return `${result}%`;
};
const blogGlobal = css`
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

  ${media.greaterThan('medium')`
    html {
      /* font-size: ${fontSizeInPercenetage(baseFontSizeHigherThanMobile)} */
    }

    blockquote{
      margin-left: -20px;
    }
  `}

  ${pandaPrismStyles};
`;

export const BlogGlobalStyle = createGlobalStyle`
  ${blogGlobal}
`;
