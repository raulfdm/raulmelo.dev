import { StrapiPosts } from '@app-types/graphql';
import { blogPostUri } from '@globalShared/utils';

export type PostModel = ReturnType<typeof Post>;

export function Post(post: StrapiPosts) {
  return {
    ...post,
    get postUri() {
      return blogPostUri(post.slug!, post.language!);
    },
  };
}
