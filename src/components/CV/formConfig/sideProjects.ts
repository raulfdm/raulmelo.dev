import { sectionTitleField } from './common';
import { DataJsonSide_ProjectsProjects } from 'graphql-types';
import { idGenerator } from '../utils';

export const sideProjects = {
  label: 'Side Projects',
  name: 'rawJson.side_projects',
  component: 'group',
  fields: [
    sectionTitleField,
    {
      label: 'Projects',
      name: 'projects',
      component: 'group-list',
      itemProps: (item: DataJsonSide_ProjectsProjects) => ({
        key: item.id,
        label: item.name,
      }),
      defaultItem: () => ({
        name: '',
        start_date: '',
        end_date: '',
        description: null,
        is_ongoing: false,
        show: true,
        id: idGenerator(),
      }),
      fields: [
        {
          label: 'Show',
          name: 'show',
          component: 'toggle',
        },
        {
          label: 'Name',
          name: 'name',
          component: 'text',
        },
        {
          label: 'Start Date',
          name: 'start_date',
          component: 'date',
        },
        {
          label: 'Is ongoing?',
          name: 'is_ongoing',
          component: 'toggle',
        },

        {
          label: 'End Date',
          name: 'end_date',
          component: 'date',
        },
        {
          label: 'Project Description',
          name: 'description',
          component: 'markdown',
        },
      ],
    },
  ],
};
