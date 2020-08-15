import { tagUri } from '@utils/routing';

describe('fn: tagUri', () => {
  it('return correct tag', () => {
    expect(tagUri('javascript')).toMatchInlineSnapshot(`"/tags/javascript"`);
  });

  it('replace white space with hyphen', () => {
    expect(tagUri('github actions')).toMatchInlineSnapshot(
      `"/tags/github-actions"`,
    );
  });

  it('replace slash with hyphen', () => {
    expect(tagUri('ci/cd')).toMatchInlineSnapshot(`"/tags/ci-cd"`);
  });
});
