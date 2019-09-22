import React from 'react';
import styled from 'styled-components';

import { Container } from '../ui';
import InputSearch from '../InputSearch';
import ThemeSwitch from '../ThemeSwitch';
import LogoSvg from '../LogoSvg';

const MenuBarWrapper = styled.nav`
  box-shadow: 0 4px 12px 0 ${({ theme, ...rest }) => theme.color.shadow};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6.5rem;
  z-index: 500;
  background-color: ${({ theme }) => theme.color.background};
`;

const CustomContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
`;

const DummySpace = styled.div`
  height: 6.5rem;
  margin-bottom: 6.5rem;
`;

const LogoWrapper = styled.div`
  flex: 1;
`;

const MenuBar = () => {
  return (
    <React.Fragment>
      <MenuBarWrapper>
        <CustomContainer>
          <LogoWrapper>
            <a href="https://medium.com/" data-log-event="home">
              <LogoSvg />
            </a>
          </LogoWrapper>
          <InputSearch />
          <ThemeSwitch />
        </CustomContainer>
      </MenuBarWrapper>
      <DummySpace />
    </React.Fragment>
  );
};

export default MenuBar;
