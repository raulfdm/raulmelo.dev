import React from 'react';

import { styled } from '@styles/styled';
import { CourseList } from '@screens/CV/components/shared/Ui';
import {
  CvJsonEducationExtra_Courses,
  CvJsonEducationExtra_CoursesPlatforms,
  CvJsonEducationExtra_CoursesPlatformsCourses,
} from '@app-types/graphql';

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
  data: CvJsonEducationExtra_Courses;
}

export const ExtraCourses = ({ data }: ExtraCourseProps): JSX.Element => {
  const { section_title, platforms } = data;

  return (
    <Wrapper>
      <Title>{section_title}</Title>
      {(platforms as CvJsonEducationExtra_CoursesPlatforms[]).map(
        ({ name, id, courses }) => {
          return (
            <Platform key={id!}>
              <CompanyName>{name}</CompanyName>
              <CourseList>
                {(courses as CvJsonEducationExtra_CoursesPlatformsCourses[]).map(
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
