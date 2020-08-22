import {
  StrapiPostSerie,
  StrapiPostSerieBlog_Posts,
  StrapiPosts,
  StrapiPostsTranslation,
  StrapiPostsPost_Tags,
} from '@app-types/graphql';

export type BlogPost_Post = Pick<
  StrapiPosts,
  | 'title'
  | 'subtitle'
  | 'description'
  | 'date'
  | 'slug'
  | 'language'
  | 'childStrapiPostContent'
> & {
  id: StrapiPosts['strapiId'];
  serieCopy: StrapiPosts['serie_copy'];
  translation: Pick<StrapiPostsTranslation, 'language' | 'slug'>;
  serie: Pick<StrapiPostSerie, 'slug' | 'id'>;
  featuredImage: StrapiPosts['featured_image'];
  tags: Pick<StrapiPostsPost_Tags, 'id' | 'name' | 'slug'>;
};

export type BlogPost_Serie_Post = Pick<
  StrapiPostSerieBlog_Posts,
  'id' | 'slug' | 'language' | 'subtitle'
> & {
  copy: StrapiPostSerieBlog_Posts['serie_copy'];
  uri: string;
};

export type BlogPost_Serie = Pick<StrapiPostSerie, 'name' | 'slug'> & {
  id: StrapiPostSerie['strapiId'];
  blogPosts: BlogPost_Serie_Post[];
};
