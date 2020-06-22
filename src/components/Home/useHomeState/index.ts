import { PostEdges } from 'types';
import React from 'react';
import * as R from 'ramda';

import { PostFilters } from '../types';
import { filterFirstSeriesPost } from '../helpers/posts';

type ActionType =
  | {
      type: 'LOAD_MORE';
    }
  | {
      type: 'FILTER';
      payload: PostFilters;
    };

type StateType = {
  postsToRender: PostEdges;
  hasMore: boolean;
  currentPosition: number;
  allPosts: PostEdges;
  filter: PostFilters;
  postByFilter: {
    all: PostEdges;
    single: PostEdges;
    series: PostEdges;
  };
};

export type UseHomeStateReturnType = Pick<
  StateType,
  'hasMore' | 'filter' | 'postsToRender'
> & {
  loadMore: () => void;
  setFilter: (nextFilter: PostFilters) => void;
};

const THRESHOLD = 5;

function getPostsByActiveFilter(
  posts: PostEdges,
  activeFilter: PostFilters,
): PostEdges {
  let nextFilteredPosts: PostEdges = posts;

  if (activeFilter === 'series') {
    nextFilteredPosts = filterFirstSeriesPost(posts);
  }

  if (activeFilter === 'single') {
    nextFilteredPosts = posts.filter((post) =>
      R.isNil(post.node.frontmatter?.series),
    );
  }

  return nextFilteredPosts;
}

export function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'LOAD_MORE': {
      const { currentPosition, postsToRender, filter, postByFilter } = state;

      const posts = postByFilter[filter];
      const nextPosition = currentPosition + THRESHOLD;
      const nextPosts = posts.slice(currentPosition, nextPosition);

      return {
        ...state,
        currentPosition: nextPosition,
        hasMore: postsToRender.length > nextPosition,
        postsToRender: ([] as PostEdges)
          .concat(postsToRender)
          .concat(nextPosts),
      };
    }

    case 'FILTER': {
      const { postByFilter } = state;
      return {
        ...state,
        filter: action.payload,
        postsToRender: postByFilter[action.payload],
      };
    }
    default:
      throw new Error('unknown action type');
  }
}

export function useHomeState(postEdges: PostEdges): UseHomeStateReturnType {
  const initialFilter = 'all';
  const [{ hasMore, postsToRender, filter }, dispatch] = React.useReducer(
    reducer,
    {
      currentPosition: THRESHOLD,
      hasMore: postEdges.length > THRESHOLD,
      postsToRender: getPostsByActiveFilter(postEdges, initialFilter).slice(
        0,
        THRESHOLD,
      ),
      allPosts: postEdges,
      filter: 'all',
      postByFilter: {
        all: getPostsByActiveFilter(postEdges, 'all'),
        series: getPostsByActiveFilter(postEdges, 'series'),
        single: getPostsByActiveFilter(postEdges, 'single'),
      },
    },
  );

  function loadMore(): void {
    dispatch({ type: 'LOAD_MORE' });
  }

  function setFilter(nextFilter: PostFilters): void {
    dispatch({ type: 'FILTER', payload: nextFilter });
  }

  return {
    hasMore,
    postsToRender,
    loadMore,
    filter,
    setFilter,
  };
}
