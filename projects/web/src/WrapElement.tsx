import React from 'react';

import { IntlContextProvider } from '@contexts/react-intl';
import { AppContextProvider } from '@contexts/app';
import * as Themes from './themes';

type WrapProps = {
  element: JSX.Element;
};

type PageElementProps = WrapProps & {
  props: {
    location: {
      pathname: string;
    };
  };
};

function getTheme(pathname: string) {
  let PageTheme;

  if (pathname.includes('/blog/') || pathname.includes('/uses')) {
    PageTheme = Themes.BlogTheme;
  } else if (pathname.includes('/cv')) {
    PageTheme = Themes.CvTheme;
  } else {
    PageTheme = Themes.SiteTheme;
  }
  return PageTheme;
}

export const WrapPageElement = ({ element, props }: PageElementProps) => {
  const { pathname } = props.location;
  const PageTheme = getTheme(pathname);

  return <PageTheme>{element}</PageTheme>;
};

export const WrapRootElement = ({ element }: WrapProps) => {
  return (
    <IntlContextProvider>
      <AppContextProvider>{element}</AppContextProvider>
    </IntlContextProvider>
  );
};
