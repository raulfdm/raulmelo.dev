import React from 'react';

import { CvJsonCareer_History } from 'graphql-types';
import { deepMemo } from 'utils/components';
import { Project } from '../shared/Project';
import { SectionTitle, Section, SectionBody } from '../shared/Section';
import { styled } from 'styles/emotion';

const StyledSection = styled(Section)`
  page-break-before: always;
`;

export const CareerExperience: React.FC<{
  data: CvJsonCareer_History;
}> = deepMemo(({ data }) => {
  const { jobs, section_title } = data;

  return (
    <StyledSection>
      <SectionTitle>{section_title}</SectionTitle>
      <SectionBody>
        {jobs!.map((job) => {
          const {
            role,
            id,
            company,
            end_date,
            is_actual,
            start_date,
            description,
          } = job!;

          return (
            <Project
              key={id!}
              description={description!}
              title={role!}
              subtitle={company!}
              endDate={end_date}
              onGoing={!!is_actual}
              startDate={start_date}
            />
          );
        })}
      </SectionBody>
    </StyledSection>
  );
});
