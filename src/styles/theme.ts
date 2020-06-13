import { SiteTheme } from 'styles/emotion';

function withFontFallback(fontName: string, serif: boolean): string {
  return `"${fontName}",-apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
  ${serif ? '' : 'sans-'}serif;`;
}

export const FONTS = {
  contentSans: 'Open Sans',
  contentSerif: 'Merriweather',
  contentTitle: 'content-title',
};

export const theme: Partial<SiteTheme> = {
  font: {
    contentSans: withFontFallback(FONTS.contentSans, false),
    contentSerif: withFontFallback(FONTS.contentSerif, true),
    contentTitle: withFontFallback('content-title', true),
  },
  color: {
    background: 'var(--background)',
    font: 'var(--font)',
    fontMedium: 'var(--font-medium)',
    fontLight: 'var(--font-light)',
    border: 'var(--border)',
    shadow: 'var(--shadow)',
    shadowLight: 'var(--shadowLight)',
    shadowBright: 'var(--shadowBright)',
    shadowMenu: 'var(--shadowMenu)',
  },
};
