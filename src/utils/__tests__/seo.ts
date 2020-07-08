import { getCanonicalLink, joinSubtitleAndDescription } from '../seo';

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

describe('fn: joinSubtitleAndDescription', () => {
  it('should return subtitle and description as a single string', () => {
    expect(
      joinSubtitleAndDescription(
        'some thoughts I had while thinking about life',
        'This is my test',
      ),
    ).toMatchInlineSnapshot(
      `"This is my test - some thoughts I had while thinking about life"`,
    );
  });

  it('should return the same description sent when subtitle is undefined', () => {
    expect(
      joinSubtitleAndDescription('This is an amazing description'),
    ).toMatchInlineSnapshot(`"This is an amazing description"`);
  });

  it('should return a striped version when its longer than 160 characters', () => {
    const bigDescription = `Aenean suscipit bibendum purus. Ut orci massa, pulvinar ut ante id, interdum condimentum sem. Etiam ex arcu, dictum id sapien non, finibus vestibulum tortor. Sed rhoncus leo non cursus gravida. Ut a risus rutrum ante congue tincidunt. Vivamus vulputate malesuada maximus. Sed nulla neque, blandit ac vulputate non, accumsan vitae ex. Pellentesque sit amet finibus felis. Pellentesque maximus odio. `;
    expect(
      joinSubtitleAndDescription(
        bigDescription,
        'This is my test that you can get amazing info',
      ),
    ).toMatchInlineSnapshot(
      `"This is my test that you can get amazing info - Aenean suscipit bibendum purus. Ut orci massa, pulvinar ut ante id, interdum condimentum sem. Etiam ex arcu, ..."`,
    );
  });
});
