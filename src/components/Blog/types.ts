import { SitePageContext } from 'graphql-types';
import { Frontmatter } from '../../types';

export type BlogPostProps = {
  pageContext: SitePageContext;
};

export type BlogPostContext = {
  series: SitePageContext['series'];
  seriesInfo?: Frontmatter['series'];
  title: Frontmatter['title'];
  subtitle: Frontmatter['subtitle'];
  image: Frontmatter['image'];
  imageCaption: Frontmatter['image_caption'];
  translations: SitePageContext['translations'];
};
