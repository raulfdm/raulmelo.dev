import { SiteTheme } from 'styles/emotion';

const fontFallback = {
  serif(font: string) {
    return `'${font}', serif`;
  },
  sansSerif(font: string) {
    return `'${font}', sans-serif;`;
  },
};

export const FONTS = {
  contentSans: 'Open Sans',
  contentSerif: 'Merriweather',
  contentTitle: 'content-title',
};

export const theme: Partial<SiteTheme> = {
  font: {
    contentSans: fontFallback.sansSerif('Open Sans'),
    contentSerif: fontFallback.serif('Merriweather'),
    contentTitle: fontFallback.serif('content-title'),
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
  sizes: {
    menuBar: {
      height: '65px',
    },
  },
};
