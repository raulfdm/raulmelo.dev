import { sectionTitleField } from './common';

export const careerSummary = {
  label: 'Career Summary',
  name: 'rawJson.career_summary',
  component: 'group',
  fields: [
    sectionTitleField,
    {
      label: 'Description',
      name: 'description',
      component: 'markdown',
    },
  ],
};
