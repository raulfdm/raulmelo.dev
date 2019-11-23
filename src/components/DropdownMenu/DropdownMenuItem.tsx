import React from 'react';
import styled from 'styled-components';

const DropdownMenuItemWrapper = styled.li`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.6);
  border-width: 0;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display: inline-block;
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.4;
  padding: 7px 25px;
  position: relative;
  text-align: left;
  text-decoration: none;
  text-rendering: optimizelegibility;
  transition: background-color 0.1s, border-color 0.1s, color 0.1s, fill 0.1s;
  user-select: none;
  vertical-align: baseline;
  white-space: nowrap;

  flex: 1;

  &:hover {
    border-color: rgba(0, 0, 0, 0.8);
    outline: 0;
  }
`;

export const DropdownMenuItem = ({ children }: any) => {
  return <DropdownMenuItemWrapper>{children}</DropdownMenuItemWrapper>;
};
