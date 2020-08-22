import {
  SitePageContext,
  SitePageContextSerie,
  SitePageContextPost,
} from '@app-types/graphql';
import { DeepNonNullable } from '@app-types';

export type BlogPostPageContext = {
  post: DeepNonNullable<SitePageContextPost>;
  postUri: NonNullable<SitePageContext['postUri']>;
  serie?: DeepNonNullable<SitePageContextSerie>;
  translation?: DeepNonNullable<SitePageContext['translation']>;
};

export type BlogPostContext = Pick<
  BlogPostPageContext,
  'post' | 'serie' | 'translation'
>;
