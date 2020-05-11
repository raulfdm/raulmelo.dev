import React from 'react';

import {
  DataJsonEducation,
  DataJsonEducationFormal,
  DataJsonEducationExtra_Courses,
} from 'graphql-types';
import { Section, SectionTitle, SectionBody } from '../shared/Section';
import { Formal } from './Formal';
import { Languages } from './Languages';
import { ExtraCourses } from './ExtraCourses';
import { deepMemo } from 'utils/components';

export const Education: React.FC<{ data: DataJsonEducation }> = deepMemo(
  ({ data }) => {
    const { section_title, extra_courses, formal, languages } = data;

    return (
      <Section>
        <SectionTitle>{section_title}</SectionTitle>
        <SectionBody>
          <Formal data={formal as DataJsonEducationFormal[]} />
          <Languages data={languages as DataJsonEducationFormal[]} />
          <ExtraCourses
            data={extra_courses as DataJsonEducationExtra_Courses}
          />
        </SectionBody>
      </Section>
    );
  },
);
