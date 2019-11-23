import React from 'react';
import styled from 'styled-components';

const DropdownMenuItemWrapper = styled.li`
  background-color: transparent;

  cursor: pointer;
  display: inline-block;
  font-family: ${props => props.theme.font.contentSans};

  font-size: 1.6rem;

  line-height: 1.4;
  padding: 7px 25px;
  position: relative;

  transition: background-color 0.1s, border-color 0.1s, color 0.1s, fill 0.1s;

  white-space: nowrap;

  flex: 1;

  &:not(:first-child) {
    border-top: 1px solid ${props => props.theme.color.border};
  }
`;

export const DropdownMenuItem = ({
  children,
  ...props
}: {
  children: React.ReactChildren | React.ReactNode | string;
  props: any;
}) => {
  return (
    <DropdownMenuItemWrapper {...props}>{children}</DropdownMenuItemWrapper>
  );
};
