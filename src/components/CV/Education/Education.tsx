import React from 'react';

import {
  CvJsonEducation,
  CvJsonEducationFormal,
  // CvJsonEducationExtra_Courses,
} from 'graphql-types';
import { Section, SectionTitle, SectionBody } from '../shared/Section';
import { Formal } from './Formal';
import { Languages } from './Languages';
// import { ExtraCourses } from './ExtraCourses';
import { deepMemo } from 'utils/components';

export const Education: React.FC<{ data: CvJsonEducation }> = deepMemo(
  ({ data }) => {
    const { section_title, extra_courses, formal, languages } = data;

    return (
      <Section>
        <SectionTitle>{section_title}</SectionTitle>
        <SectionBody>
          <Formal data={formal as CvJsonEducationFormal[]} />
          <Languages data={languages as CvJsonEducationFormal[]} />
          {/* <ExtraCourses data={extra_courses as CvJsonEducationExtra_Courses} /> */}
        </SectionBody>
      </Section>
    );
  },
);
