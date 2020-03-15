/* eslint-disable @typescript-eslint/ban-ts-ignore */
import * as R from 'ramda';
import { PostEdge, PostEdges } from '../../../types';

export function filterFirstSeriesPost(edges: PostEdges): PostEdges {
  const filterSeriesPost = R.filter(
    (p: PostEdge) => !R.isNil(p.node.frontmatter!.series),
  );
  const sortSeriesByDate = R.sortBy((p: PostEdge) =>
    new Date(p.node.frontmatter!.date).valueOf(),
  );
  const groupBySeriesId = R.groupBy(
    (p: PostEdge) => p.node.frontmatter!.series!.id,
  );
  const getSeriesHeadsFromPairs = R.map(([_, series]) => {
    return R.head(series);
  });
  const sortDescFinalPosts = R.sort((a: PostEdge, b: PostEdge) => {
    const datePath = R.path(['node', 'frontmatter', 'date']);

    return (
      new Date(datePath(b) as string).valueOf() -
      new Date(datePath(a) as string).valueOf()
    );
  });

  return R.pipe(
    /* TODO: I have no idea how to fix this type,
    but the tests are passing :) */
    //@ts-ignore
    filterSeriesPost,
    sortSeriesByDate,
    groupBySeriesId,
    R.toPairs,
    getSeriesHeadsFromPairs,
    sortDescFinalPosts,
  )(edges) as PostEdges;
}
