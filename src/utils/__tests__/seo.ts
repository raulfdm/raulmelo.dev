import { getCanonicalLink } from '../seo';

describe('fn: getCanonicalLink', () => {
  it('should return full site url without duplicated brackets', () => {
    expect(
      getCanonicalLink({
        siteUrl: 'https://raulmelo.dev/',
        uri: '/blog/my-post',
      }),
    ).toMatchInlineSnapshot(`"https://raulmelo.dev/blog/my-post"`);
  });
});
