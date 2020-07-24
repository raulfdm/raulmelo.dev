import React from 'react';

import { styled } from '@screens/CV/styled';
import {
  CvJsonTechnical_Skills,
  CvJsonTechnical_SkillsSkills,
  CvJsonTechnical_SkillsSkillsTechnologies,
} from 'graphql-types';
import { deepMemo } from 'utils/components';
import {
  SectionTitle,
  Section,
  SectionBody,
} from '@screens/CV/components/shared/Section';

const Group = styled.div`
  flex-direction: column;
  padding: 2px 0;
  display: flex;
  align-items: baseline;
`;

const Title = styled.h3`
  font-weight: bold;
  ::after {
    content: ':';
  }
`;

const List = styled.ul``;

const Skill = styled.li`
  &:not(:last-child) {
    ::after {
      content: ', ';
    }
  }
`;

export const TechnicalSkills: React.FC<{
  data: CvJsonTechnical_Skills;
}> = deepMemo(({ data }) => {
  const { section_title, skills } = data;
  return (
    <Section>
      <SectionTitle>{section_title}</SectionTitle>
      <SectionBody>
        {(skills as CvJsonTechnical_SkillsSkills[]).map((skill) => {
          const { id, group_name, technologies } = skill!;

          return (
            <Group key={id!}>
              <Title>{group_name}</Title>
              <List>
                {(technologies as CvJsonTechnical_SkillsSkillsTechnologies[]).map(
                  (tech) => (
                    <Skill key={tech.id!}>{tech.name}</Skill>
                  ),
                )}
              </List>
            </Group>
          );
        })}
      </SectionBody>
    </Section>
  );
});
