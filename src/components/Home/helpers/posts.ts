/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as R from 'ramda';
import {
  PostEdges,
  PostEdge,
  PostTranslations,
  PostTranslation,
} from '../../../types';

function createTranslationsField(
  postEdge: PostEdge,
  translations: PostTranslations,
): PostEdge {
  const nextEdge = R.clone(postEdge);
  nextEdge.node.translations = translations;
  return nextEdge;
}

function postEdgeToTranslate(postEdge: PostEdge): PostTranslation {
  const { lang, slug } = postEdge.node.fields!;

  return {
    lang: lang!,
    slug,
  };
}

type Options = {
  preferredLang: string;
  postEdges: PostEdges;
};

export const getAndSanitizePostsFromQueryResponse = ({
  postEdges,
  preferredLang,
}: Options): PostEdges => {
  if (!postEdges) {
    return [];
  }

  const postByCommonSlug = R.groupBy(
    (edge: PostEdge) => edge.node.fields?.commonSlug!,
    postEdges,
  );

  const slugPostPairs = R.toPairs(postByCommonSlug);

  const edgesWithTranslations = slugPostPairs.reduce((result, [, posts]) => {
    if (posts.length === 1) {
      return result.concat(posts);
    }

    const isPreferredLang = R.pathEq(['node', 'fields', 'lang'], preferredLang);
    const preferredPostIndex = R.findIndex(isPreferredLang, posts);
    const preferredPost = posts[preferredPostIndex];
    const translations = R.without([preferredPost], posts).map(
      postEdgeToTranslate,
    );

    const preferredPostWithTranslations = createTranslationsField(
      preferredPost,
      translations,
    );

    return result.concat(preferredPostWithTranslations);
  }, [] as PostEdges);

  return edgesWithTranslations;
};

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
    //@ts-ignore
  )(edges) as PostEdges;
}
