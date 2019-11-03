import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import mediaQuery from 'styled-media-query';
import i18next from 'i18next';

import { Container } from '../ui';
import InputSearch from '../InputSearch';
import ThemeSwitch from '../ThemeSwitch';
import LogoSvg from '../LogoSvg';

const MenuBarWrapper = styled.nav`
  box-shadow: 0 4px 12px 0 ${({ theme }) => theme.color.shadow};
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

  ${mediaQuery.greaterThan('medium')(css`
    max-width: 80%;
  `)}
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
            <Link to="/">
              <LogoSvg />
            </Link>
          </LogoWrapper>
          <InputSearch />
          <ThemeSwitch />

          <div>
            <button onClick={() => i18next.changeLanguage('pt-br')}>PT</button>
            <button onClick={() => i18next.changeLanguage('en')}>EN</button>
          </div>
        </CustomContainer>
      </MenuBarWrapper>
      <DummySpace />
    </React.Fragment>
  );
};

export default MenuBar;
