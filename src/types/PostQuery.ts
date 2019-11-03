export type Frontmatter = {
  date: string;
  description: string;
  title: string;
  featuredImage: string;
};

export type QueryNode = {
  id: string;
  excerpt: string;
  timeToRead: number;
  fields: {
    slug: string;
  };
  frontmatter: Frontmatter;
};

export type Edges = Array<{ node: QueryNode }>;
