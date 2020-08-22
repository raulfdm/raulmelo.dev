import { LocaleValues } from './Locales';
import {
  StrapiPosts,
  SitePageContextPostChildStrapiPostContentChildMdx,
} from '@app-types/graphql';

export type HitAlgolia = {
  objectID: NonNullable<StrapiPosts['id']>;
  language: LocaleValues;
  slug: NonNullable<StrapiPosts['slug']>;
  description: NonNullable<StrapiPosts['description']>;
  title: NonNullable<StrapiPosts['title']>;
  subtitle: StrapiPosts['subtitle'];
  timeToRead: NonNullable<
    Pick<SitePageContextPostChildStrapiPostContentChildMdx, 'timeToRead'>
  >;
  excerpt: NonNullable<
    Pick<SitePageContextPostChildStrapiPostContentChildMdx, 'timeToRead'>
  >;
  date: NonNullable<StrapiPosts['date']>;
};

export type RequestAlgoliaClient = {
  indexName: string;
  params: {
    highlightPreTag: string;
    highlightPostTag: string;
    query: string;
    facets: string[];
    tagFilters: string;
  };
};

export type RequestsAlgoliaClient = RequestAlgoliaClient[];
