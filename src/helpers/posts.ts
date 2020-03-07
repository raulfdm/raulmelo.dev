import * as R from 'ramda';

import {
  GraphQLAllMarkdownRemarkResponse,
  PostEdges,
  PostEdge,
  PostTranslations,
  PostTranslation,
} from 'src/types';

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
    lang,
    slug,
  };
}

type Options = {
  preferredLang: string;
} & GraphQLAllMarkdownRemarkResponse;

export const getAndSanitizePostsFromQueryResponse = ({
  data,
  preferredLang,
}: Options): PostEdges => {
  const edges: PostEdges | undefined = R.path(
    ['allMarkdownRemark', 'edges'],
    data,
  );

  if (!edges) {
    return [];
  }

  const postByCommonSlug = R.groupBy(
    (edge: PostEdge) => edge.node.fields?.commonSlug!,
    edges,
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
