import { sectionTitleField } from './common';
import { DataJsonCareer_HistoryJobs } from 'graphql-types';
import { idGenerator } from '../utils';

export const careerExperience = {
  label: 'Career History',
  name: 'rawJson.career_history',
  description: 'First section with contact information',
  component: 'group',
  fields: [
    sectionTitleField,
    {
      label: 'Career History',
      name: 'jobs',
      component: 'group-list',
      itemProps: (item: DataJsonCareer_HistoryJobs) => ({
        key: item.id,
        label: item.company,
      }),
      defaultItem: () => ({
        role: '',
        company: '',
        start_date: '',
        end_date: '',
        description: '',
        is_actual: false,
        id: idGenerator(),
      }),
      fields: [
        {
          label: 'Role',
          name: 'role',
          component: 'text',
        },
        {
          label: 'Company Name',
          name: 'company',
          component: 'text',
        },
        {
          label: 'Start Date',
          name: 'start_date',
          component: 'date',
        },
        {
          label: 'Current job',
          name: 'is_actual',
          component: 'toggle',
        },
        {
          label: 'End Date',
          name: 'end_date',
          component: 'date',
        },
        {
          label: 'Role Description',
          name: 'description',
          description: '',
          component: 'markdown',
        },
      ],
    },
  ],
};
