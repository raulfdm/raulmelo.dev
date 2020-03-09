import { createGlobalStyle } from 'styled-components';

import { customGlobals } from './globals';
import { resets } from './reset';

export const GlobalStyles = createGlobalStyle`
  ${resets};
  ${customGlobals};
`;
