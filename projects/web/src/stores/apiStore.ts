import { types, Instance } from 'mobx-state-tree';

import {
  StrapiPostTags,
  StrapiPosts,
  StrapiPostSerie,
} from '@app-types/graphql';
import { blogPostUri } from '@globalShared/utils';

const ChildImageSharp_Fluid = types.model({
  aspectRatio: types.number,
  base64: types.string,
  originalImg: types.string,
  presentationHeight: types.number,
  presentationWidth: types.number,
  sizes: types.string,
  src: types.string,
  srcSet: types.string,
  srcSetWebp: types.string,
  srcWebp: types.string,
  tracedSVG: types.string,
});

const ChildImageSharp_Original = types.model({
  src: types.string,
});

const ChildImageSharp = types.model({
  fluid: ChildImageSharp_Fluid,
  original: ChildImageSharp_Original,
});

const Translation = types.model({
  slug: types.string,
  language: types.string,
});

const Tag = types.model({
  id: types.string,
  slug: types.string,
  name: types.string,
});

const Language = types.enumeration('Language', ['en', 'pt']);

const ChildStrapiPostContent = types.model({
  childMdx: types.model({
    timeToRead: types.number,
  }),
});

const Post = types
  .model({
    id: types.string,
    title: types.string,
    subtitle: types.maybeNull(types.string),
    description: types.string,
    date: types.string,
    language: Language,
    slug: types.string,
    serieCopy: types.maybeNull(types.string),
    translation: types.maybeNull(Translation),
    serie: types.maybeNull(
      types.model({
        id: types.string,
        name: types.string,
        slug: types.string,
        tags: types.maybe(types.array(types.string)),
      }),
    ),
    featuredImage: types.maybeNull(
      types.model({
        childImageSharp: ChildImageSharp,
      }),
    ),
    childStrapiPostContent: ChildStrapiPostContent,
    tags: types.maybeNull(types.array(Tag)),
  })
  .views((self) => ({
    /* TODO: Test it */
    get postUri() {
      return blogPostUri(self.slug, self.language);
    },
  }));

const Serie = types.model({
  name: types.string,
  id: types.string,
  slug: types.string,
  blogPosts: types.maybe(
    types.array(
      types.model({
        id: types.string,
      }),
    ),
  ),
});

export const ApiStore = types
  .model({
    tags: types.map(Tag),
    posts: types.map(Post),
    series: types.map(Serie),
  })
  .actions((self) => ({
    setTags(tags: StrapiPostTags[]) {
      tags.forEach((tag) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        self.tags.set(tag.id!, tag as any);
      });
    },
    setPosts(posts: StrapiPosts[]) {
      /**
       * It's important to clear the posts for the cases we need to have
       * a completely new data, like using the same store instance
       * but changing posts for a new tag.
       *
       * If we don't clean it up the state of posts would be dirty
       * by the previous selection
       */
      self.posts.clear();

      posts.forEach((post) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        self.posts.set(post.id!, post as any);
      });
    },
    setSeries(series: StrapiPostSerie[]) {
      series.forEach((serie) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        self.series.set(serie.id!, serie as any);
      });
    },
  }))
  .views((self) => ({
    getPostPerLanguage() {
      const result = { en: [] as PostsInstance, pt: [] as PostsInstance };

      self.posts.forEach((post) => {
        result[post.language].push(post);
      });

      return result;
    },
    get postsList() {
      return Object.values(self.posts.toJSON());
    },
  }));

export type PostInstance = Instance<typeof Post>;
export type PostsInstance = PostInstance[];

export type PostTagInstance = Instance<typeof Tag>;
export type PostTagsInstance = PostTagInstance[];

export type PostSerieInstance = Instance<typeof Serie>;
export type PostSeriesInstance = PostSerieInstance[];

export type ApiStoreInstance = Instance<typeof ApiStore>;
