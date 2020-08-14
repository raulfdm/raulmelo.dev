import React from 'react';

import { styled } from '@screens/CV/styled';
import { StrapiCv } from '@app-types/graphql';
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

type InterestsProps = Pick<StrapiCv, 'interests'>;

export const Interests: React.FC<InterestsProps> = ({ interests }) => {
  return (
    <Section>
      <SectionTitle>Interests</SectionTitle>
      <SectionBody>
        <ul>
          {interests!.map((interest) => {
            const { id, name } = interest!;

            return <InterestItem key={id!}>{name}</InterestItem>;
          })}
        </ul>
      </SectionBody>
    </Section>
  );
};
