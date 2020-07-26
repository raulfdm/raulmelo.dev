import { types } from 'mobx-state-tree';

import { Fields } from './Fields';
import { Frontmatter } from './Frontmatter';

export const Node = types.model({
  fields: Fields,
  fileAbsolutePath: types.string,
  frontmatter: Frontmatter,
  id: types.identifier,
  timeToRead: types.number,
});
