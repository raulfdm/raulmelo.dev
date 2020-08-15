import React from 'react';

import { StrapiCvEducation } from '@app-types/graphql';
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

type FormalProps = Pick<StrapiCvEducation, 'formal'>;

export const Formal: React.FC<FormalProps> = ({ formal }) => {
  return (
    <CourseList>
      {formal!.map((edu) => {
        const { start_date, end_date, foundation, id, is_actual, title } = edu!;

        return (
          <FormalItem key={id!}>
            <Period>
              <RangeDate
                endDate={end_date}
                startDate={start_date}
                isActual={is_actual!}
              />
            </Period>
            <Company>{`${title} - ${foundation}`}</Company>
          </FormalItem>
        );
      })}
    </CourseList>
  );
};
