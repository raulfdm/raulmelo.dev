const { createFields, BLOGS_PATH, DEFAULT_LANG } = require('../createFields');

describe('fn: createFields', () => {
  describe('pt post', () => {
    const node = {
      internal: {
        type: 'MarkdownRemark',
      },
      fileAbsolutePath: `${BLOGS_PATH}/2017/05/regex-part-1/index.md`,
    };

    const createNodeField = jest.fn();

    beforeAll(() => {
      createFields({
        node,
        actions: {
          createNodeField,
        },
      });
    });

    it('create slug without post locale', () => {
      expect(createNodeField.mock.calls[0][0]).toEqual({
        node,
        name: 'slug',
        value: '/2017/05/regex-part-1',
      });
    });

    it('create "lang" field', () => {
      expect(createNodeField.mock.calls[1][0]).toEqual({
        node,
        name: 'lang',
        value: DEFAULT_LANG,
      });
    });
  });

  describe('en post', () => {
    const node = {
      internal: {
        type: 'MarkdownRemark',
      },
      fileAbsolutePath: `${BLOGS_PATH}/2017/05/regex-part-1/index.en.md`,
    };

    const createNodeField = jest.fn();

    beforeAll(() => {
      createFields({
        node,
        actions: {
          createNodeField,
        },
      });
    });

    it('create slug with post locale', () => {
      expect(createNodeField.mock.calls[0][0]).toEqual({
        node,
        name: 'slug',
        value: '/en/2017/05/regex-part-1',
      });
    });

    it('create "lang" field', () => {
      expect(createNodeField.mock.calls[1][0]).toEqual({
        node,
        name: 'lang',
        value: 'en',
      });
    });
  });
});
