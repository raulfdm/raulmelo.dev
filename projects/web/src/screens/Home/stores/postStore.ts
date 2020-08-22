import { types, Instance } from 'mobx-state-tree';
import * as R from 'ramda';

import { ApiStore } from '@stores/apiStore';
import { LocaleValues } from '@app-types';

const POST_THRESHOLD = 5;

type PossibleFilters = 'all' | 'single' | 'series';

export const PostsStore = types
  .model('BlogFilters', {
    activeFilter: types.enumeration('Filters', ['all', 'single', 'series']),
    apiData: ApiStore,
    numberOfPostsToShow: POST_THRESHOLD,
  })
  .actions((self) => ({
    loadMore() {
      const nextAmountOfPosts = self.numberOfPostsToShow + POST_THRESHOLD;
      self.numberOfPostsToShow =
        nextAmountOfPosts <= self.apiData.posts.size
          ? nextAmountOfPosts
          : self.apiData.posts.size;
    },
    changeFilter(nextFilter: PossibleFilters) {
      self.activeFilter = nextFilter;
    },
  }))
  .views((self) => {
    function postsToRender(language: LocaleValues) {
      // const postsArray = Object.values(self.apiData.posts.toJSON());
      const postsArray = self.apiData.getPostPerLanguage()[language];

      let posts = postsArray;

      if (self.activeFilter === 'series') {
        /*
          The series query must filter by blog_posts.date ascending,
          in other words, from the first to the latest.

          Here I only want the first post of each series to be picked and showed
          up in the "series filter"
        */
        const onlyFirstSeriesPosts = Object.values(
          self.apiData.series.toJSON(),
        ).map((serie) => {
          return serie!.blogPosts![0].id;
        });

        posts = postsArray.filter((p) => onlyFirstSeriesPosts.includes(p.id));
      }

      if (self.activeFilter === 'single') {
        posts = postsArray.filter((p) => R.isNil(p.serie));
      }

      return posts.slice(0, self.numberOfPostsToShow);
    }

    function hasMore() {
      /**
       * TODO: fix this logic
       * When we load more posts, the list of postsToRender is updated.
       * Then, when "hasMore" is called in the component itself,
       * we have the following scenario:
       *
       * posts.length = 10 (already updated via loadMore)
       * allPosts.length = 10
       * 10 < 10 === false
       *
       * The test would pass but functionality wise will be broken
       *
       * When just returning true, functionality wise it works fine
       */

      // const posts = postsToRender();
      // const allPosts = getPostForFilter();
      // return posts.length <= allPosts.length;
      return true;
    }

    return {
      hasMore,
      postsToRender,
    };
  });

export type PostsStoreInstance = Instance<typeof PostsStore>;
