import React from 'react';
import { render as renderTlr, RenderResult } from '@testing-library/react';

import { ThemeProvider } from '@contexts/theme';
import { IntlContextProvider } from '@contexts/react-intl';

export * from '@testing-library/react';

export function render(component: React.ReactElement): RenderResult {
  return renderTlr(
    <ThemeProvider>
      <IntlContextProvider>{component}</IntlContextProvider>
    </ThemeProvider>,
  );
}
