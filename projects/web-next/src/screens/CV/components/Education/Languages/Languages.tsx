import React from 'react';

import { styled } from '@screens/CV/styled';
import { CourseList } from '@screens/CV/components/shared/Ui';
import { deepMemo } from '@utils/components';
import { StrapiCvEducation } from '@app-types/graphql';

const StyledCourseList = styled(CourseList)`
  padding: 1rem 0;
`;

const Language = styled.li``;

type LanguagesProps = Pick<StrapiCvEducation, 'languages'>;

export const Languages: React.FC<LanguagesProps> = deepMemo(({ languages }) => {
  return (
    <StyledCourseList>
      {languages!.map((lang) => {
        const { id, name, proficiency } = lang!;
        return (
          <Language key={id!}>
            {name} - {proficiency}
          </Language>
        );
      })}
    </StyledCourseList>
  );
});
