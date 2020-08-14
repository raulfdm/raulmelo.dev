import React from 'react';
import ReactMarkdown from 'react-markdown';

import { StrapiCv } from '@app-types/graphql';
import { deepMemo } from '@utils/components';
import {
  Section,
  SectionTitle,
  SectionBody,
} from '@screens/CV/components/shared/Section';

type CareerSummaryProps = Pick<StrapiCv, 'summary'>;

export const CareerSummary: React.FC<CareerSummaryProps> = deepMemo(
  ({ summary }) => {
    return (
      <Section>
        <SectionTitle>Career Summary</SectionTitle>
        <SectionBody>
          <ReactMarkdown source={summary!} />
        </SectionBody>
      </Section>
    );
  },
);
