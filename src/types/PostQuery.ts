import { PostSeries } from './Series';
import { FrontMatterImage } from './GraphQL';

export type FrontmatterSeries = PostSeries | null;

export type Frontmatter = {
  date: string;
  description: string;
  title: string;
  subtitle: string;
  series: FrontmatterSeries;
  image: FrontMatterImage;
};

export type QueryNode = {
  htmlAst?: object;
  id: string;
  excerpt: string;
  timeToRead: number;
  fields: {
    slug: string;
  };
  frontmatter: Frontmatter;
};

export type PostEdge = { node: QueryNode };

export type Edges = Array<PostEdge>;
