export type Frontmatter = {
  date: string;
  description: string;
  title: string;
  image: {
    publicURL: string;
  };
};

export type QueryNode = {
  id: string;
  excerpt: string;
  timeToRead: number;
  fields: {
    slug: string;
    locale: string;
    localizedSlug: string;
  };
  frontmatter: Frontmatter;
};

export type Edges = Array<{ node: QueryNode }>;
