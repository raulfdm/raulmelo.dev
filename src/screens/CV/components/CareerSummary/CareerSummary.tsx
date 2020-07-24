import React from 'react';
import ReactMarkdown from 'react-markdown';

import { CvJsonCareer_Summary } from '@app-types/graphql';
import { deepMemo } from '@utils/components';
import {
  Section,
  SectionTitle,
  SectionBody,
} from '@screens/CV/components/shared/Section';

export const CareerSummary: React.FC<{
  data: CvJsonCareer_Summary;
}> = deepMemo(({ data }) => {
  const { section_title, description } = data;
  return (
    <Section>
      <SectionTitle>{section_title}</SectionTitle>
      <SectionBody>
        <ReactMarkdown source={description!} />
      </SectionBody>
    </Section>
  );
});
