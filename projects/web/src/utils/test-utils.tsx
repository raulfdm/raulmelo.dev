import React from 'react';
import { render as renderTlr, RenderResult } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

import { ThemeProvider } from '@contexts/theme';
import { IntlContextProvider } from '@contexts/react-intl';

export * from '@testing-library/react';
export const userEvent = UserEvent;

export function render(component: React.ReactElement): RenderResult {
  return renderTlr(
    <ThemeProvider>
      <IntlContextProvider>{component}</IntlContextProvider>
    </ThemeProvider>,
  );
}
