import React from 'react';

import { StrapiCv } from '@app-types/graphql';
import {
  Section,
  SectionTitle,
  SectionBody,
} from '@screens/CV/components/shared/Section';
import { Formal } from './Formal';
import { Languages } from './Languages';
import { deepMemo } from '@utils/components';

type EducationProps = Pick<StrapiCv, 'education'>;

export const Education: React.FC<EducationProps> = deepMemo(({ education }) => {
  const { formal, languages } = education!;

  return (
    <Section>
      <SectionTitle>Education and Languages</SectionTitle>
      <SectionBody>
        <Formal formal={formal} />
        <Languages languages={languages} />
      </SectionBody>
    </Section>
  );
});
