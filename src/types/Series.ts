export type PostSeries = {
  index: number;
  subtitle: string;
  copy: string;
  uri: string;
};

export type SeriesType = {
  [index: number]: PostSeries;
};
