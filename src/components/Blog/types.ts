import { SeriesType, PostSeries, PostEdge, Frontmatter } from '../../types';

export type BlogPostProps = {
  pageContext: {
    nextPost: PostSeries | null;
    post: PostEdge;
    series: SeriesType;
  };
};

export type BlogPostContext = {
  series?: SeriesType;
  seriesInfo?: Frontmatter['series'];
  title: Frontmatter['title'];
  subtitle: Frontmatter['subtitle'];
  image: Frontmatter['image'];
  imageCaption: Frontmatter['image_caption'];
};
