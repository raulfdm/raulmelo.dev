import * as R from 'ramda';

const sanitizeCategory = R.pipe(
  R.toLower,
  R.replace('/', '-'),
  R.replace(/\s/, '-'),
);

export function tagUri(tag: string): string {
  return `/tags/${sanitizeCategory(tag)}`;
}
