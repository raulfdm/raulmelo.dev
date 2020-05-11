import { DataJsonInterestsValues } from 'graphql-types';
import { sectionTitleField } from './common';
import { idGenerator } from '../utils';

export const interests = {
  label: 'Interests',
  name: 'rawJson.interests',
  component: 'group',
  fields: [
    sectionTitleField,
    {
      label: 'List of Interests',
      name: 'values',
      component: 'group-list',
      itemProps: (item: DataJsonInterestsValues) => ({
        key: item.id,
        label: item.name,
      }),
      defaultItem: () => ({
        name: '',
        id: idGenerator(),
      }),
      fields: [
        {
          label: 'Topic',
          name: 'name',
          component: 'text',
        },
      ],
    },
  ],
};
