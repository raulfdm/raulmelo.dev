import { css, createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '21px',
  baseLineHeight: 1.58,
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
  overrideStyles: ({ rhythm }) => ({
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
    },
  }),
});

// const global = css`
//   .post * {

//     article {
//       a {
//         color: inherit;
//         background-image: linear-gradient(
//           to right,
//           ${({ theme }) => theme.color.font} 100%,
//           ${({ theme }) => theme.color.font} 0
//         );
//         background-size: 1px 1px;
//         background-position: 0 calc(1em + 1px);
//         background-repeat: repeat-x;
//       }
//     }

//     h2,
//     h3,
//     h4,
//     h5,
//     h6 {
//       font-family: ${({ theme }) => theme.font.contentSans};
//       line-height: 1;
//     }

//     h2 {
//       font-size: 3.4rem;
//       font-weight: 600;
//     }

//     h2 + p,
//     h3 + p,
//     h4 + p,
//     h5 + p,
//     h6 + p {
//       margin-top: 1.2rem;
//       ${media.greaterThan('small')`
//       margin-top: 1.8rem;
//     `}
//     }

//     p + h2,
//     p + h3,
//     p + h4,
//     p + h5,
//     p + h6,
//     .gif-wrapper {
//       margin-top: 2.2rem;
//       ${media.greaterThan('small')`
//       margin-top: 3rem;
//     `}
//     }

//     a {
//       text-decoration: underline solid ${({ theme }) => theme.color.font};
//     }

//     .twitter-tweet {
//       margin: 4rem auto !important;
//     }

//     .gatsby-resp-image-figcaption,
//     .gif-caption {
//       font-family: ${({ theme }) => theme.font.contentSans};
//       text-align: center;
//       margin: 0;
//       margin-top: 1rem;
//       line-height: 1.4;
//       font-size: 1.6rem;
//       color: ${({ theme }) => theme.color.font};
//       opacity: 0.6;
//     }

//     .copy-title-icon {
//       color: ${({ theme }) => theme.color.font};
//       svg {
//         height: 1.6rem;

//         ${media.greaterThan('medium')`
//         height: 2rem;
//       `}
//       }
//     }
//   }
// `;

const global = css`
  body {
    font-size: unset;
  }

  ${typography.toString()};

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
`;

export const BlogGlobalStyle = createGlobalStyle`
  ${global}
`;
