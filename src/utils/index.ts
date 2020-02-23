import { PostEdge, PostEdges } from 'src/types/GraphQL';

type PostBySlug = {
  [locale: string]: PostEdge;
};

type Result = {
  [slug: string]: PostBySlug;
};

export const getPostsBySlug = (edges: PostEdges): [string, PostBySlug][] => {
  const posts = edges.reduce((result: Result, edge: PostEdge) => {
    const { slug, locale } = edge.node.fields;

    const post = result[slug];

    if (!post) {
      result[slug] = { [locale]: edge };
    } else {
      result[slug][locale] = edge;
    }
    return result;
  }, {});

  return Object.entries(posts);
};
