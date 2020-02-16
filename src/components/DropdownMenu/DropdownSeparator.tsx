import React from 'react';
import styled from 'styled-components';

const SeparatorWrapper = styled.li`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  /* border-width: 0; */
  display: block;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
  list-style: none;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 0 15px;
  text-align: left;
  white-space: nowrap;

  height: 1px;
`;

export const DropdownSeparator: React.FC = () => <SeparatorWrapper />;
