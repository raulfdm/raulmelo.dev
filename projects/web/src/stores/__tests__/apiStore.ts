import { ApiStore } from '../apiStore';
import { apiMockedData } from '../__mocks__/apiStoreMockedData';

function createApiStore({
  withPosts = false,
  withTags = false,
  withSeries = false,
} = {}) {
  const store = ApiStore.create();

  if (withPosts) {
    store.setPosts(apiMockedData.data.posts.nodes as any);
  }
  if (withTags) {
    store.setTags(apiMockedData.data.tags.nodes as any);
  }
  if (withSeries) {
    store.setSeries(apiMockedData.data.series.nodes as any);
  }

  return store;
}

describe('apiStore', () => {
  describe('actions', () => {
    const store = createApiStore();

    it('store all tags when call setTags', () => {
      store.setTags(apiMockedData.data.tags.nodes as any);

      const values = Object.values(store.tags.toJSON());
      expect(values).toEqual(apiMockedData.data.tags.nodes);
    });

    it('store all tags when call setPosts', () => {
      const posts = apiMockedData.data.posts.nodes;
      store.setPosts(posts as any);

      const values = Object.values(store.posts.toJSON());
      expect(values).toEqual(posts);
    });

    it('store all tags when call setSeries', () => {
      const series = apiMockedData.data.series.nodes;

      store.setSeries(series as any);
      const values = Object.values(store.series.toJSON());
      expect(values).toEqual(series);
    });
  });

  describe('get elements by its ID', () => {
    it('get post by id', () => {
      const store = createApiStore({ withPosts: true });

      const post = apiMockedData.data.posts.nodes[0];

      expect(store.posts.get(post.id)).toEqual(post);
    });

    it('gets series by id', () => {
      const series = apiMockedData.data.series.nodes[0];
      const store = createApiStore({ withSeries: true });

      expect(store.series.get(series.id)).toEqual(series);
    });

    it('gets tag by id', () => {
      const tag = apiMockedData.data.tags.nodes[0];
      const store = createApiStore({ withTags: true });

      expect(store.tags.get(tag.id)).toEqual(tag);
    });
  });

  describe('views', () => {
    it('returns a list of all posts', () => {
      const store = createApiStore({ withPosts: true });

      expect(store.postsList).toEqual(apiMockedData.data.posts.nodes);
    });

    it('returns posts divided by language', () => {
      const store = createApiStore({ withPosts: true });
      const postsPerLanguage = store.getPostPerLanguage();

      expect(postsPerLanguage.en).toHaveLength(2);
      expect(postsPerLanguage.pt).toHaveLength(4);
    });
  });
});
