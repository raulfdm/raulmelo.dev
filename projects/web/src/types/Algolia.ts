/* TODO: Refactor this types (and all others) */
export type HitAlgolia = {
  description: string;
  fields: {
    slug: string;
  };
  title: string;
  subtitle: string | null;
  timeToRead: number;
  date: string;
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
