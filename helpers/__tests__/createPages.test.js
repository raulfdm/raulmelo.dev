const { createYearPage } = require('../createPages');
const { singlePost, twoPosts } = require('./__mocks__/createPages');

describe('fn: createYearPage', () => {
  describe('Case 1: single page', () => {
    const graphql = jest.fn(() => Promise.resolve(singlePost.api));

    const createPageMock = jest.fn();

    beforeEach(async () => {
      jest.clearAllMocks();
      await createYearPage({ graphql, createPage: createPageMock });
    });

    it('calls create page function twice', () => {
      expect(createPageMock).toHaveBeenCalledTimes(2);
    });

    it('creates year page', () => {
      expect(createPageMock).toHaveBeenNthCalledWith(1, {
        path: singlePost.expect.yearCase,
        component: expect.stringContaining('home.tsx'),
        context: {
          postEdges: singlePost.expect.edges,
        },
      });
    });

    it('creates year plus month page', () => {
      expect(createPageMock).toHaveBeenNthCalledWith(2, {
        path: singlePost.expect.yearMonthCase,
        component: expect.stringContaining('home.tsx'),
        context: {
          postEdges: singlePost.expect.edges,
        },
      });
    });
  });

  describe('Case 2: multiple pages', () => {
    const graphql = jest.fn(() => Promise.resolve(twoPosts.api));

    const createPageMock = jest.fn();

    beforeEach(async () => {
      jest.clearAllMocks();
      await createYearPage({ graphql, createPage: createPageMock });
    });

    it('calls create page function 4 times', () => {
      expect(createPageMock).toHaveBeenCalledTimes(4);
    });

    twoPosts.expect.posts.forEach((post, index) => {
      const currentPostIndex = index + 1;

      describe(`Page ${currentPostIndex}`, () => {
        it('creates year page', () => {
          expect(createPageMock).toHaveBeenNthCalledWith(currentPostIndex, {
            path: post.yearCase,
            component: expect.stringContaining('home.tsx'),
            context: {
              postEdges: post.edges,
            },
          });
        });

        it('creates year plus month page', () => {
          expect(createPageMock).toHaveBeenNthCalledWith(currentPostIndex + 2, {
            path: post.yearMonthCase,
            component: expect.stringContaining('home.tsx'),
            context: {
              postEdges: post.edges,
            },
          });
        });
      });
    });
  });
});
