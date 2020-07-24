import { polyfill as scrollPolyfill } from 'smoothscroll-polyfill';

if (typeof window !== `undefined`) {
  scrollPolyfill();
}

const moveToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function useScrollToTop(): {
  moveToTop: typeof moveToTop;
} {
  return { moveToTop };
}
