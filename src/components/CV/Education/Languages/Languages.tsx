import React from 'react';
import styled from '@emotion/styled';

import { CourseList } from 'components/CV/shared/Ui';
import { deepMemo } from 'utils/components';
import { DataJsonEducationLanguages } from 'graphql-types';

const StyledCourseList = styled(CourseList)`
  padding: 1rem 0;
`;

const Language = styled.li``;

export const Languages: React.FC<{
  data: DataJsonEducationLanguages[];
}> = deepMemo(({ data }) => {
  return (
    <StyledCourseList>
      {data.map(({ name, id, proficiency }) => (
        <Language key={id!}>
          {name} - {proficiency}
        </Language>
      ))}
    </StyledCourseList>
  );
});
