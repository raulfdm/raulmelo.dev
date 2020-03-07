import { FluidObject } from 'gatsby-image';

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
  image: FrontMatterImage;
};

type PostFields = {
  slug: string;
};

export type PostNode = {
  id: string;
  timeToRead: number;
  fields: PostFields;
  frontmatter: FrontMatter;
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
