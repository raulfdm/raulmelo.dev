import React from 'react';
import Link from 'gatsby-link';
import { Search as SearchIcon } from 'styled-icons/evil/Search';

import { LanguageSwitch } from '../LanguageSwitch';
import { ThemeSwitch } from '../ThemeSwitch';
import LogoSvg from '../LogoSvg';
import * as S from './styled';

export const MenuBar: React.FC = () => {
  return (
    <React.Fragment>
      <S.MenuBarWrapper>
        <S.CustomContainer>
          <S.LogoWrapper>
            <Link to="/">
              <LogoSvg />
            </Link>
          </S.LogoWrapper>
          <Link to="/search">
            <SearchIcon size={24} />
          </Link>
          <ThemeSwitch />
          <LanguageSwitch />
        </S.CustomContainer>
      </S.MenuBarWrapper>
      <S.DummySpace />
    </React.Fragment>
  );
};
