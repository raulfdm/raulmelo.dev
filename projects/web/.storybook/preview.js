import React from 'react';
import { action } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react';

import { ThemeProvider } from '@contexts/theme';
import { GlobalStyles } from '@styles/index';
import { BlogGlobalStyle } from '@styles/blogPost';
import { IntlContextProvider, useIntl } from '@contexts/react-intl';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'pt', right: '🇧🇷', title: 'Portuguese' },
      ],
    },
  },
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'lightning',
      items: [
        {
          value: 'light',
          title: 'Light',
          right: '☀️',
        },
        {
          value: 'dark',
          title: 'Dark',
          right: '🌑',
        },
      ],
    },
  },
};

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

// Just a dummy component to switch theme via storybook
const ThemeHandler = ({ lang }) => {
  const { switchLocale } = useIntl();

  React.useEffect(() => {
    switchLocale(lang);
  }, [lang]);

  return <></>;
};

addDecorator((story, ctx) => {
  /* I only wants to import blog globalStyles if the component is
  part of Blog/ */
  const isBlog = ctx.kind.includes('Blog/');
  const { locale, theme } = ctx.globals;

  /* This code only exists to make the Theme works in Storybook env.
  It's also present in `preview-body` but here since I cannot commit updates
  there when the user select a new theme, I do it here.
  */
  React.useEffect(() => {
    document.querySelector('body').classList.add(theme);
  }, [theme]);

  return (
    <IntlContextProvider>
      <ThemeHandler lang={locale} />
      <ThemeProvider initialTheme={theme}>
        <GlobalStyles />
        {isBlog && <BlogGlobalStyle />}
        {story()}
      </ThemeProvider>
    </IntlContextProvider>
  );
});
