import React from 'react';
import dayjs from 'dayjs';

const formatExperienceDate = (date: string): string => {
  return date && dayjs(date).format("MMM'YY");
};

export const RangeDate: React.FC<{
  startDate: string;
  endDate?: string;
  isActual?: boolean;
}> = React.memo(function RangeDate({ startDate, endDate = '', isActual }) {
  return (
    <React.Fragment>
      <time dateTime={formatExperienceDate(startDate)}>
        {formatExperienceDate(startDate)}
      </time>
      {' - '}
      {isActual ? (
        <span>Present</span>
      ) : (
        <time dateTime={formatExperienceDate(endDate)}>
          {formatExperienceDate(endDate)}
        </time>
      )}
    </React.Fragment>
  );
});
