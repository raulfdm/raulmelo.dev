import React from 'react';
import ReactMarkdown from 'react-markdown';

import { CvData } from '@screens/CV/types';
import { Section, SectionTitle, SectionBody } from '../shared/Section';

type CareerSummaryProps = Pick<CvData, 'summary'>;

export const CareerSummary: React.FC<CareerSummaryProps> = ({ summary }) => {
  return (
    <Section>
      <SectionTitle>Career Summary</SectionTitle>
      <SectionBody>
        <ReactMarkdown source={summary!} />
      </SectionBody>
    </Section>
  );
};
