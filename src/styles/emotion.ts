import defaultStyled, { CreateStyled } from '@emotion/styled';
import { generateMedia, defaultBreakpoints } from 'styled-media-query';

export interface SiteTheme {
  isDarkTheme: boolean;
  font: {
    contentSans: string;
    contentSerif: string;
    contentTitle: string;
  };
  color: {
    background: string;
    font: string;
    fontMedium: string;
    fontLight: string;
    border: string;
    shadow: string;
    shadowLight: string;
    shadowBright: string;
    shadowMenu: string;
    infoBox: string;
  };
  sizes: {
    menuBar: {
      height: string;
    };
  };
}

export const styled = defaultStyled as CreateStyled<SiteTheme>;
export { css, Global } from '@emotion/core';
export { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

export const media = generateMedia({ ...defaultBreakpoints, medium: '768px' });
