import React from 'react';
import styled from '@emotion/styled';

import { CourseList } from 'components/CV/shared/Ui';
import {
  DataJsonEducationExtra_Courses,
  DataJsonEducationExtra_CoursesPlatforms,
  DataJsonEducationExtra_CoursesPlatformsCourses,
} from 'graphql-types';

const Wrapper = styled.div`
  margin-top: 0.8rem;
`;

const Title = styled.h3`
  font-size: 1.8rem;
`;

const CompanyName = styled.h4``;

const CourseItem = styled.li`
  margin: 0.4rem 0;
  ::before {
    content: '• ';
  }
`;

const Platform = styled.div``;

interface ExtraCourseProps {
  data: DataJsonEducationExtra_Courses;
}

export const ExtraCourses = ({ data }: ExtraCourseProps): JSX.Element => {
  const { section_title, platforms } = data;

  return (
    <Wrapper>
      <Title>{section_title}</Title>
      {(platforms as DataJsonEducationExtra_CoursesPlatforms[]).map(
        ({ name, id, courses }) => {
          return (
            <Platform key={id!}>
              <CompanyName>{name}</CompanyName>
              <CourseList>
                {(courses as DataJsonEducationExtra_CoursesPlatformsCourses[]).map(
                  ({ name, id, hours }) => (
                    <CourseItem
                      key={id!}
                    >{`${name} - ${hours} Hours`}</CourseItem>
                  ),
                )}
              </CourseList>
            </Platform>
          );
        },
      )}
    </Wrapper>
  );
};
