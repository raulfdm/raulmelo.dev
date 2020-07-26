import { types } from 'mobx-state-tree';

export const Fields = types.model({
  lang: types.string,
  postFolderName: types.string,
  slug: types.string,
});
