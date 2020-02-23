import { createGlobalStyle } from 'styled-components';

import { fonts } from './fonts';
import { customGlobals } from './globals';
import { resets } from './reset';

export const GlobalStyles = createGlobalStyle`
  ${resets};
  ${fonts};
  ${customGlobals};
`;
