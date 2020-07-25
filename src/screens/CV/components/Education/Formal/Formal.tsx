import React from 'react';

import { CvJsonEducationFormal, Maybe } from '@app-types/graphql';
import { styled } from '@screens/CV/styled';
import { RangeDate } from '@screens/CV/components/shared/RangeDate';
import { CourseList } from '@screens/CV/components/shared/Ui';

const FormalItem = styled.li``;

const Period = styled.p`
  display: inline;
  font-weight: bold;
  ::after {
    content: ' - ';
  }
`;

const Company = styled.p`
  display: inline;
`;

export const Formal: React.FC<{ data: Maybe<CvJsonEducationFormal[]> }> = ({
  data,
}) => {
  return (
    <CourseList>
      {data!.map((formalEdu) => {
        const { start_date, end_date, title, foundation, id } = formalEdu!;

        return (
          <FormalItem key={id!}>
            <Period>
              <RangeDate
                endDate={end_date}
                startDate={start_date}
                isActual={false}
              />
            </Period>
            <Company>{`${title} - ${foundation}`}</Company>
          </FormalItem>
        );
      })}
    </CourseList>
  );
};
