import { SitePageContext } from '@app-types/graphql';
import { Frontmatter } from '@app-types';

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
