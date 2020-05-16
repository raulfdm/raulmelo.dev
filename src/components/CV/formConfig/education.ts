import {
  CvJsonEducationFormal,
  CvJsonEducationLanguages,
  CvJsonEducationExtra_CoursesPlatforms,
  CvJsonEducationExtra_CoursesPlatformsCoursesFilterInput,
} from 'graphql-types';
import { sectionTitleField } from './common';
import { idGenerator } from '../utils';

export const education = {
  label: 'Education',
  name: 'rawJson.education',
  component: 'group',
  fields: [
    sectionTitleField,
    {
      label: 'Formal Education',
      name: 'formal',
      component: 'group-list',
      itemProps: (item: CvJsonEducationFormal) => ({
        key: item.id,
        label: item.foundation,
      }),
      defaultItem: () => ({
        title: '',
        foundation: '',
        start_date: '',
        end_date: '',
        id: idGenerator(),
      }),
      fields: [
        {
          label: 'Title',
          name: 'title',
          component: 'text',
        },
        {
          label: 'Foundation',
          name: 'foundation',
          component: 'text',
        },
        {
          label: 'Start Date',
          name: 'start_date',
          component: 'date',
        },
        {
          label: 'End Date',
          name: 'end_date',
          component: 'date',
        },
      ],
    },
    {
      label: 'Languages',
      name: 'languages',
      component: 'group-list',
      itemProps: (item: CvJsonEducationLanguages) => ({
        key: item.id,
        label: item.name,
      }),
      defaultItem: () => ({
        name: '',
        proficiency: '',
        id: idGenerator(),
      }),
      fields: [
        {
          label: 'Language Name',
          name: 'name',
          component: 'text',
        },
        {
          label: 'Proficiency',
          name: 'proficiency',
          component: 'text',
        },
      ],
    },
    {
      label: 'Extra Courses',
      name: 'extra_courses',
      component: 'group',
      fields: [
        sectionTitleField,
        {
          label: 'Platforms',
          name: 'platforms',
          component: 'group-list',
          itemProps: (item: CvJsonEducationExtra_CoursesPlatforms) => ({
            key: item.id,
            label: item.name,
          }),
          defaultItem: () => ({
            name: '',
            courses: [],
            id: idGenerator(),
          }),
          fields: [
            {
              label: 'Platform Name',
              name: 'name',
              component: 'text',
            },
            {
              label: 'Courses',
              name: 'courses',
              component: 'group-list',
              itemProps: (
                item: CvJsonEducationExtra_CoursesPlatformsCoursesFilterInput,
              ) => ({
                key: item.id,
                label:
                  item.name && item.hours
                    ? `${item.name} - ${item.hours}h`
                    : '',
              }),
              defaultItem: () => ({
                name: '',
                hours: null,
                id: idGenerator(),
              }),
              fields: [
                {
                  label: 'Course Name',
                  name: 'name',
                  component: 'text',
                },
                {
                  label: 'Hours',
                  name: 'hours',
                  component: 'number',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
