import React from 'react';
import { Global, css } from 'styles/emotion';

import { customGlobals } from './globals';
import { resets } from './reset';
import { globalFonts } from './fonts';

export const GlobalStyles = () => (
  <Global
    styles={css`
      ${resets};
      ${customGlobals};
      ${globalFonts};
    `}
  />
);
