import { createGlobalStyle } from './styled';

import { customGlobals } from './globals';
import { resets } from './reset';
import { globalFonts } from './fonts';

export const GlobalStyles = createGlobalStyle`
  ${resets};
  ${customGlobals};
  ${globalFonts};
`;
