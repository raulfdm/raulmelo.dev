/* eslint-disable @typescript-eslint/no-explicit-any */
import * as R from 'ramda';

export function isNilOrEmpty(param: any) {
  return R.isNil(param) || R.isEmpty(param);
}

export function isNotNilNorEmpty(param: any) {
  return R.not(isNilOrEmpty(param));
}

export const isBrowserApiAvailable = {
  get window() {
    return typeof window !== 'undefined';
  },
  get navigator() {
    return typeof navigator !== 'undefined';
  },
};
