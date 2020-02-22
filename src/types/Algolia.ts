/* TODO: Refactor this types (and all others) */
export type HitAlgolia = {
  description: string;
  image: {
    publicURL: string;
  };
  fields: {
    localizedSlug: string;
  };
  title: string;
  timeToRead: number;
  date: string;
};
