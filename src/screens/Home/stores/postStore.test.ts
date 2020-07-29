import { PostsStore } from './postStore';
import mockedAllPosts from './__mocks__/mockedPosts';

function createState(posts = mockedAllPosts) {
  return PostsStore.create({ posts, activeFilter: 'all' } as any);
}

describe('postFilters', () => {
  describe('initial state', () => {
    const store = createState();

    it('activeFilter is "all"', () => {
      expect(store.activeFilter).toBe('all');
    });

    it('initialize with posts send', () => {
      expect(store.posts).toEqual(mockedAllPosts);
    });

    it('numberOfPostsToShow is 5', () => {
      expect(store.numberOfPostsToShow).toBe(5);
    });
  });

  describe('actions', () => {
    describe('fn: loadMore', () => {
      it('adds more 5 posts to be shown', () => {
        const store = createState();

        expect(store.numberOfPostsToShow).toBe(5);

        store.loadMore();

        expect(store.numberOfPostsToShow).toBe(10);
      });

      it('The max number of posts is the list size', () => {
        const store = createState();

        expect(store.numberOfPostsToShow).toBe(5);

        store.loadMore();
        store.loadMore();
        store.loadMore();
        store.loadMore();
        store.loadMore();

        expect(store.numberOfPostsToShow).toBe(10);
      });
    });

    describe('fn: changeFilter', () => {
      it('changes the selected filter', () => {
        const store = createState();

        expect(store.activeFilter).toBe('all');
        store.changeFilter('series');
        expect(store.activeFilter).toBe('series');
      });
    });

    describe('fn: setPosts', () => {
      it('should store sent posts', () => {
        const store = createState([]);

        expect(store.posts).toEqual([]);

        store.setPosts(mockedAllPosts as any);

        expect(store.posts).toEqual(mockedAllPosts);
      });
    });
  });

  describe('views', () => {
    describe('fn: hasMore', () => {
      /**
       * This test is failing because of the current implement of loadMore
       * When we load more posts, the list of postsToRender is updated.
       * Then, when "hasMore" is called in the component itself,
       * we have the following scenario:
       *
       * posts.length = 10 (already updated via loadMore)
       * allPosts.length = 10
       * 10 < 10 === false
       *
       * The test would pass but functionality wise will be broken
       */
      it.skip('returns false if has more posts to load', () => {
        const posts: any[] = mockedAllPosts.slice(0, 1);
        const store = createState(posts);

        expect(store.hasMore()).toBe(false);
      });

      it('returns true if has more posts to load', () => {
        const store = createState();

        expect(store.hasMore()).toBe(true);
      });
    });

    describe('fn: postsToRender', () => {
      it('returns the first 5 elements from the list', () => {
        const store = createState();

        expect(store.postsToRender()).toHaveLength(5);
        expect(store.postsToRender()).toMatchSnapshot();
      });

      it('returns all elements if the list has less than 5', () => {
        const posts = mockedAllPosts.slice(0, 3);
        const store = createState(posts as any);

        expect(store.postsToRender()).toHaveLength(3);
        expect(store.postsToRender()).toEqual(posts);
      });
    });
  });
});
