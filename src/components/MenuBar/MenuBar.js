import React from 'react';
import styled from 'styled-components';
import { Container } from '../ui';

const MenuBarWrapper = styled.nav`
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6.5rem;
`;

const CustomContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const MenuBar = () => {
  return (
    <MenuBarWrapper>
      <CustomContainer>gege</CustomContainer>
    </MenuBarWrapper>
  );
};

export default MenuBar;
