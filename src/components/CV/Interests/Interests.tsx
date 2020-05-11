import React from 'react';
import styled from '@emotion/styled';

import { DataJsonInterests } from 'graphql-types';
import { Section, SectionTitle, SectionBody } from '../shared/Section';

const InterestItem = styled.li`
  display: block;
  ::before {
    content: '• ';
  }
`;

export const Interests: React.FC<{ data: DataJsonInterests }> = ({ data }) => {
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
