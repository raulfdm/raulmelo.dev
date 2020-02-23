import { css } from 'styled-components';

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
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: var(--font);

    min-height: 100vh;
    position: relative;
    background-color: var(--background);
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
