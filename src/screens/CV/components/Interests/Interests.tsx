import React from 'react';

import { styled } from '@screens/CV/styled';
import { CvJsonInterests } from '@app-types/graphql';
import {
  Section,
  SectionTitle,
  SectionBody,
} from '@screens/CV/components/shared/Section';

const InterestItem = styled.li`
  display: block;
  ::before {
    content: '• ';
  }
`;

export const Interests: React.FC<{ data: CvJsonInterests }> = ({ data }) => {
  const { section_title, values } = data;

  return (
    <Section>
      <SectionTitle>{section_title}</SectionTitle>
      <SectionBody>
        <ul>
          {values!.map((interest) => {
            const { id, name } = interest!;

            return <InterestItem key={id!}>{name}</InterestItem>;
          })}
        </ul>
      </SectionBody>
    </Section>
  );
};
