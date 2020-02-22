import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import mediaQuery from 'styled-media-query';
import { Search as SearchIcon } from 'styled-icons/evil/Search';

import { LanguageSwitch } from '../LanguageSwitch';
import { Container } from '../ui';
import ThemeSwitch from '../ThemeSwitch';
import LogoSvg from '../LogoSvg';

const MenuBarWrapper = styled.nav`
  box-shadow: 0 4px 12px 0 ${({ theme }) => theme.color.shadowMenu};

  ${({ theme }) =>
    theme.isDarkTheme && `border-bottom: 1px solid ${theme.color.border}`};

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6.5rem;
  z-index: 500;
  background-color: ${({ theme }) => theme.color.background};

  a {
    color: inherit;
  }
`;

const CustomContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mediaQuery.greaterThan('medium')`
    max-width: 80%;
  `}
`;

const DummySpace = styled.div`
  height: 6.5rem;
  margin-bottom: 6.5rem;
`;

const LogoWrapper = styled.div`
  flex: 1;
`;

const MenuBar: React.FC = () => {
  return (
    <React.Fragment>
      <MenuBarWrapper>
        <CustomContainer>
          <LogoWrapper>
            <Link to="/">
              <LogoSvg />
            </Link>
          </LogoWrapper>
          <Link to="/search">
            <SearchIcon size={24} />
          </Link>
          <ThemeSwitch />
          <LanguageSwitch />
        </CustomContainer>
      </MenuBarWrapper>
      <DummySpace />
    </React.Fragment>
  );
};

export default MenuBar;
