import { FrontMatterImage } from './GraphQL';
/* TODO: Refactor this types (and all others) */
export type HitAlgolia = {
  description: string;
  image: FrontMatterImage;
  fields: {
    localizedSlug: string;
  };
  title: string;
  timeToRead: number;
  date: string;
};
