import { PostSeries } from './Series';
import { FrontMatterImage } from './GraphQL';

export type FrontmatterSeries = PostSeries | null;

export type Frontmatter = {
  date: string;
  description: string;
  title: string;
  series: FrontmatterSeries;
  image: FrontMatterImage;
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
