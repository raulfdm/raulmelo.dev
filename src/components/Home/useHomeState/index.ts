import { PostEdges } from 'types';
import React from 'react';

import { PostFilters } from '../types';

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
};

const THRESHOLD = 5;

export function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'LOAD_MORE': {
      const { currentPosition, allPosts, postsToRender } = state;
      const nextPosition = currentPosition + THRESHOLD;

      const nextPosts = allPosts.slice(currentPosition, nextPosition);

      return {
        ...state,
        currentPosition: nextPosition,
        hasMore: allPosts.length > nextPosition,
        postsToRender: ([] as PostEdges)
          .concat(postsToRender)
          .concat(nextPosts),
      };
    }

    case 'FILTER': {
      return { ...state, filter: action.payload };
    }
    default:
      throw new Error('unknown action type');
  }
}

export function useHomeState(
  postEdges: PostEdges,
): Pick<StateType, 'hasMore' | 'filter' | 'postsToRender'> & {
  loadMore: () => void;
  setFilter: (nextFilter: PostFilters) => void;
} {
  const [{ hasMore, postsToRender, filter }, dispatch] = React.useReducer(
    reducer,
    {
      currentPosition: THRESHOLD,
      hasMore: postEdges.length > THRESHOLD,
      postsToRender: postEdges.slice(0, THRESHOLD),
      allPosts: postEdges,
      filter: 'all',
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
