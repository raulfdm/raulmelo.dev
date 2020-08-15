import { createGlobalStyle } from '@styles/styled';

import { customGlobals } from '@styles/globals';
import { resets } from '@styles/reset';
import { globalFonts } from '@styles/fonts';

export const GlobalStyles = createGlobalStyle`
  ${resets};
  ${customGlobals};
  ${globalFonts};
`;
