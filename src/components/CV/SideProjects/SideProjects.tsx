import React from 'react';

import { Section, SectionTitle, SectionBody } from '../shared/Section';
import { DataJsonSide_Projects } from 'graphql-types';
import { deepMemo } from 'utils/components';
import { Project } from '../shared/Project';

export const SideProjects: React.FC<{ data: DataJsonSide_Projects }> = deepMemo(
  ({ data }) => {
    const { section_title, projects } = data;
    return (
      <Section>
        <SectionTitle>{section_title}</SectionTitle>
        <SectionBody>
          {projects!
            .filter((p) => p!.show)
            .map((project) => {
              const {
                name,
                id,
                start_date,
                end_date,
                is_ongoing,
                description,
              } = project!;

              return (
                <Project
                  key={id!}
                  title={name!}
                  startDate={start_date}
                  endDate={end_date as string | undefined}
                  onGoing={!!is_ongoing}
                  description={description!}
                />
              );
            })}
        </SectionBody>
      </Section>
    );
  },
);
