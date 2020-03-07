import { FluidObject } from 'gatsby-image';
import { PostSeries } from './Series';

export type FrontmatterSeries = PostSeries | null;

export type FrontMatterImage = {
  childImageSharp: {
    fluid: FluidObject;
  };
};

type FrontMatter = {
  title: string;
  subtitle: string;
  date: string;
  categories: string[];
  description: string;
  series: FrontmatterSeries;
  image: FrontMatterImage;
};

type PostFields = {
  slug: string;
  lang: string;
  commonSlug: string;
};

export type PostTranslation = {
  slug: string;
  lang: string;
};

export type PostTranslations = PostTranslation[];

export type PostNode = {
  htmlAst?: object;
  excerpt?: string;
  id?: string;
  timeToRead?: number;
  fields?: PostFields;
  frontmatter?: FrontMatter;
  translations?: PostTranslations;
};

export type PostEdge = {
  node: PostNode;
};

export type PostEdges = PostEdge[];

export type AllMarkdownRemark = {
  allMarkdownRemark: {
    edges: PostEdges;
  };
};

export type GraphQLAllMarkdownRemarkResponse = {
  data: AllMarkdownRemark;
};
