const { tagUri } = require('../utils');

describe('fn: tagUri', () => {
  it('return correct tag', () => {
    expect(tagUri('javascript')).toMatchInlineSnapshot(`"/tags/javascript"`);
    expect(tagUri('ci-cd')).toMatchInlineSnapshot(`"/tags/ci-cd"`);
    expect(tagUri('github-actions')).toMatchInlineSnapshot(
      `"/tags/github-actions"`,
    );
  });
});
