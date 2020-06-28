import * as R from 'ramda';

const sanitizeTag = R.pipe(
  R.toLower,
  R.replace('/', '-'),
  R.replace(/\s/, '-'),
);

export function tagUri(tag: string): string {
  return `/tags/${sanitizeTag(tag)}`;
}
