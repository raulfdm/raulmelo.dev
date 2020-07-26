import { types } from 'mobx-state-tree';

import { Series } from './Series';
import { Image } from './Image';

export const Frontmatter = types.model({
  date: types.string,
  description: types.maybeNull(types.string),
  image: types.maybeNull(Image),
  series: types.maybeNull(Series),
  subtitle: types.maybeNull(types.string),
  tags: types.array(types.string),
  title: types.string,
});
