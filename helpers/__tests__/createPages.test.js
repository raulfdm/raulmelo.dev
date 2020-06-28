const { createTagPage } = require('../createPages');
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
