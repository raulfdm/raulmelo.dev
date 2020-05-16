import { sectionTitleField } from './common';
import {
  CvJsonTechnical_SkillsSkills,
  CvJsonTechnical_SkillsSkillsTechnologies,
} from 'graphql-types';
import { idGenerator } from '../utils';

export const technicalSkills = {
  label: 'Technical Skills',
  name: 'rawJson.technical_skills',
  component: 'group',
  fields: [
    sectionTitleField,
    {
      label: 'Skills',
      name: 'skills',
      component: 'group-list',
      itemProps: (item: CvJsonTechnical_SkillsSkills) => ({
        key: item.id,
        label: item.group_name,
      }),
      defaultItem: () => ({
        group_name: '',
        id: idGenerator(),
        technologies: [],
      }),
      fields: [
        {
          label: 'Group Name',
          name: 'group_name',
          component: 'text',
        },
        {
          label: 'Technology',
          name: 'technologies',
          component: 'group-list',
          itemProps: (item: CvJsonTechnical_SkillsSkillsTechnologies) => ({
            key: item.id,
            label: item.name,
          }),
          defaultItem: () => ({
            name: '',
            id: idGenerator(),
          }),
          fields: [
            {
              label: 'Technology Name',
              name: 'name',
              component: 'text',
            },
          ],
        },
      ],
    },
  ],
};
