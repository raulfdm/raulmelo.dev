export const isBrowserApiAvailable = {
  get window() {
    return typeof window !== 'undefined';
  },
  get navigator() {
    return typeof navigator !== 'undefined';
  },
};
