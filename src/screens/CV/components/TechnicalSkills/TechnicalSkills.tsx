import React from 'react';

import { StrapiCv } from '@app-types/graphql';
import { deepMemo } from '@utils/components';
import {
  SectionTitle,
  Section,
  SectionBody,
} from '@screens/CV/components/shared/Section';
import { Group, Skill, List, Title } from './styled';

type TechnicalSkillsProps = Pick<StrapiCv, 'technical_skills'>;

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = deepMemo(
  ({ technical_skills }) => {
    return (
      <Section>
        <SectionTitle>Technical Skills</SectionTitle>
        <SectionBody>
          {technical_skills!.map((skill) => {
            const { id, technologies, name } = skill!;

            return (
              <Group key={id!}>
                <Title>{name}</Title>
                <List>
                  {technologies!.map((tech) => {
                    const { id, name } = tech!;
                    console.log();
                    return <Skill key={id!}>{name}</Skill>;
                  })}
                </List>
              </Group>
            );
          })}
        </SectionBody>
      </Section>
    );
  },
);
