import { css } from 'styles/emotion';
import { darken } from 'polished';

export const customGlobals = css`
  /* CUSTOM */
  html {
    font-size: 10px;
  }

  body,
  body.light {
    --background: rgb(255, 255, 255);
    --font: rgb(0, 0, 0, 0.84);
    --font-medium: rgba(0, 0, 0, 0.76);
    --font-light: rgba(0, 0, 0, 0.54);
    --border: rgba(0, 0, 0, 0.1);
    --shadow: rgba(0, 0, 0, 0.35);
    --shadowLight: rgba(0, 0, 0, 0.25);
    --shadowBright: rgba(0, 0, 0, 0.05);
    --shadowMenu: rgba(0, 0, 0, 0.05);
    --tag: rgb(242, 242, 242);
    --tagHover: ${darken(0.1, 'rgb(242, 242, 242)')};
  }

  body.dark {
    --background: rgb(21, 32, 43);
    --font: rgba(255, 255, 255, 1);
    --font-medium: rgba(255, 255, 255, 0.7);
    --font-light: rgba(255, 255, 255, 0.54);
    --border: rgba(255, 255, 255, 0.1);
    --shadow: rgba(255, 255, 255, 0.35);
    --shadowLight: rgba(255, 255, 255, 0.25);
    --shadowBright: rgba(255, 255, 255, 0.05);
    --shadowMenu: '';
    --tag: rgb(21, 32, 43);
    --tagHover: ${darken(0.4, 'rgb(242, 242, 242)')};
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: var(--font);

    min-height: 100vh;
    position: relative;
  }

  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    background-color: var(--background);
    color: var(--font);

    transition: background-color 0.2s ease, color 0.2s ease, fill 0.2s ease,
      opacity 0.2s ease, color 0.2s ease, border 0.2s ease;
  }

  img,
  svg {
    vertical-align: middle;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
