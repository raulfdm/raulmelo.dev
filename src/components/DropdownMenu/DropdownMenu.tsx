import React from 'react';
import styled from 'styled-components';

const StyledDropdownMenu = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 1px 2px, rgba(0, 0, 0, 0.35) 0 0 1px;
  max-width: 280px;
  overflow: auto;
  padding: 8px 0;
  position: relative;
`;

const Wrapper = styled.div`
  color: rgba(0, 0, 0, 0.84);
  overflow: hidden;
  padding: 15px;
  position: fixed;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const ArrowUp = styled.div`
  clip: rect(0, 18px, 14px, -4px);
  left: 50%;
  margin-left: -7px;
  position: absolute;
  top: 1px;

  &::after {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background: #fff;
    box-shadow: -1px -1px 1px -1px rgba(0, 0, 0, 0.54);
    transform: rotate(45deg) translate(6px, 6px);
  }
`;

export const DropdownMenu = ({ children }: any) => {
  return (
    <Wrapper>
      <StyledDropdownMenu>
        <List>{children}</List>
      </StyledDropdownMenu>
      <ArrowUp />
    </Wrapper>
  );
};
