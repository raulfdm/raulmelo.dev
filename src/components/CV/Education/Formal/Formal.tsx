import React from 'react';

import { styled } from 'components/CV/styles';
import { CvJsonEducationFormal, Maybe } from 'graphql-types';
import { RangeDate } from 'components/CV/shared/RangeDate';
import { CourseList } from 'components/CV/shared/Ui';

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
