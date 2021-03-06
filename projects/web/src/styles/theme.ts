import { SiteTheme } from '@styles/styled';

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

export const theme: SiteTheme = {
  isDarkTheme: false,
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
    infoBox: 'var(--infoBox)',
  },
  sizes: {
    menuBar: {
      height: '65px',
    },
  },
};
