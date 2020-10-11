import { CvQuery } from './cv.graphql';

export type CvData = NonNullable<CvQuery['cv']>;
