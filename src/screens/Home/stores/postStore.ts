/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { types, Instance } from 'mobx-state-tree';
import * as R from 'ramda';

import { filterFirstSeriesPost } from '@screens/Home/helpers/posts';
import { PostEdges } from '@app-types';
import { PostEdge } from '@models';

const POST_THRESHOLD = 5;

const Posts = types.array(PostEdge);

type PossibleFilters = 'all' | 'single' | 'series';

type PostsModelInstance = Instance<typeof Posts>;

export const PostsStore = types
  .model('BlogFilters', {
    activeFilter: types.enumeration('Filters', ['all', 'single', 'series']),
    posts: types.optional(Posts, []),
    numberOfPostsToShow: POST_THRESHOLD,
  })
  .actions((self) => {
    function loadMore() {
      const nextAmountOfPosts = self.numberOfPostsToShow + POST_THRESHOLD;
      self.numberOfPostsToShow =
        nextAmountOfPosts <= self.posts.length
          ? nextAmountOfPosts
          : self.posts.length;
    }

    function changeFilter(nextFilter: PossibleFilters) {
      self.activeFilter = nextFilter;
    }

    function setPosts(nextPosts: PostEdges) {
      self.posts = nextPosts as PostsModelInstance;
    }

    return { loadMore, changeFilter, setPosts };
  })
  .views((self) => {
    function getPostForFilter() {
      if (self.activeFilter === 'series') {
        return filterFirstSeriesPost(
          self.posts as PostEdges,
        ) as PostsModelInstance;
      }

      if (self.activeFilter === 'single') {
        return self.posts
          .toJS()
          .filter((p) => R.isNil(p.node.frontmatter?.series));
      }

      return self.posts;
    }

    function postsToRender() {
      return getPostForFilter().slice(0, self.numberOfPostsToShow);
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
