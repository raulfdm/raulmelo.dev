import { tagUri } from '../routing';

describe('fn: tagUri', () => {
  it('return correct tag', () => {
    expect(tagUri('javascript')).toMatchInlineSnapshot(`"/tag/javascript"`);
  });

  it('replace white space with hyphen', () => {
    expect(tagUri('github actions')).toMatchInlineSnapshot(
      `"/tag/github-actions"`,
    );
  });

  it('replace slash with hyphen', () => {
    expect(tagUri('ci/cd')).toMatchInlineSnapshot(`"/tag/ci-cd"`);
  });
});
