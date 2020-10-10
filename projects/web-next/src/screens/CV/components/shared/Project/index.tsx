import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Wrapper, Title, Info, Subtitle, Period } from './styles';
import { RangeDate } from '../RangeDate';

export const Project: React.FC<{
  title: string;
  subtitle?: string;
  startDate: string;
  endDate?: string;
  onGoing?: boolean;
  description: string;
}> = ({ title, subtitle, startDate, endDate, onGoing, description }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Info>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Period>
          <RangeDate
            startDate={startDate}
            endDate={endDate}
            isActual={onGoing}
          />
        </Period>
      </Info>
      <ReactMarkdown source={description!} />
    </Wrapper>
  );
};
