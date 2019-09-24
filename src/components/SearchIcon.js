import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  fill: ${({ theme }) => theme.color.font};
`;

const SearcIcon = props => (
  <Icon width={25} height={25} {...props}>
    <path d="M20.07 18.93l-4.16-4.15a6 6 0 10-.88.88l4.15 4.16a.62.62 0 10.89-.89zM6.5 11a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0z" />
  </Icon>
);

export default SearcIcon;
