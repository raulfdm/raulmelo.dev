const {
  createTagPage,
  bindPostWithItsTranslations,
} = require('../createPages');
const { tagPagePosts } = require('./__mocks__/createPages');

describe('fn: createTagPage', () => {
  const graphql = jest.fn(() => Promise.resolve(tagPagePosts.apiResponse));
  const createPageMock = jest.fn();

  it('calls createPage function with the expected data', async () => {
    await createTagPage({ graphql, createPage: createPageMock });

    expect(createPageMock).toHaveBeenCalledTimes(tagPagePosts.expects.length);

    tagPagePosts.expects.forEach((expectData, index) => {
      expect(createPageMock).toHaveBeenNthCalledWith(index + 1, expectData);
    });
  });
});

const mockedData = [
  {
    node: {
      id: '7f826c11-517a-573d-837f-9574af4112ca',
      fields: {
        slug: '/blog/pomodoro',
        lang: 'pt',
        postFolderName: 'pomodoro',
      },
    },
  },
  {
    node: {
      id: 'a3018a97-cb09-58b1-a5ad-7468fafe96cb',
      fields: {
        slug: '/blog/en/cache-gatsby-github-actions',
        lang: 'en',
        postFolderName: 'cache-gatsby-github-actions',
      },
    },
  },
  {
    node: {
      id: '205cb9ad-6ce7-5703-bde6-adb40a4de0e1',
      fields: {
        slug: '/blog/dev-js-part-9',
        lang: 'pt',
        postFolderName: 'dev-js-part-9',
      },
    },
  },
  {
    node: {
      id: '6c594c3f-062d-5fae-86da-732f016e7f11',
      fields: {
        slug: '/blog/yml-for-web-dev',
        lang: 'pt',
        postFolderName: 'yml-for-web-dev',
      },
    },
  },
  {
    node: {
      id: '9c433d86-5f58-5f13-880c-d40f42afcfe7',
      fields: {
        slug: '/blog/en/yml-for-web-dev',
        lang: 'en',
        postFolderName: 'yml-for-web-dev',
      },
    },
  },
];

const expectedData = [
  {
    node: {
      id: '7f826c11-517a-573d-837f-9574af4112ca',
      fields: {
        slug: '/blog/pomodoro',
        lang: 'pt',
        postFolderName: 'pomodoro',
      },
      nonGraphQLData: {
        translations: null,
      },
    },
  },
  {
    node: {
      id: 'a3018a97-cb09-58b1-a5ad-7468fafe96cb',
      fields: {
        slug: '/blog/en/cache-gatsby-github-actions',
        lang: 'en',
        postFolderName: 'cache-gatsby-github-actions',
      },
      nonGraphQLData: {
        translations: null,
      },
    },
  },
  {
    node: {
      id: '205cb9ad-6ce7-5703-bde6-adb40a4de0e1',
      fields: {
        slug: '/blog/dev-js-part-9',
        lang: 'pt',
        postFolderName: 'dev-js-part-9',
      },
      nonGraphQLData: {
        translations: null,
      },
    },
  },
  {
    node: {
      id: '6c594c3f-062d-5fae-86da-732f016e7f11',
      fields: {
        slug: '/blog/yml-for-web-dev',
        lang: 'pt',
        postFolderName: 'yml-for-web-dev',
      },
      nonGraphQLData: {
        translations: [
          {
            lang: 'en',
            slug: '/blog/en/yml-for-web-dev',
          },
        ],
      },
    },
  },
  {
    node: {
      id: '9c433d86-5f58-5f13-880c-d40f42afcfe7',
      fields: {
        slug: '/blog/en/yml-for-web-dev',
        lang: 'en',
        postFolderName: 'yml-for-web-dev',
      },
      nonGraphQLData: {
        translations: [
          {
            lang: 'pt',
            slug: '/blog/yml-for-web-dev',
          },
        ],
      },
    },
  },
];

describe('fn: bindPostWithItsTranslations', () => {
  it('returns expected values', () => {
    expect(bindPostWithItsTranslations(mockedData)).toEqual(expectedData);
  });
});
