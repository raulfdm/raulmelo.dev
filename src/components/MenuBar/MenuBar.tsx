import React from 'react';
import Link from 'gatsby-link';
import { useScroll } from 'react-use-gesture';
import { useSpring } from 'react-spring';
import { Search as SearchIcon } from 'styled-icons/evil/Search';

import { LanguageSwitch } from '../LanguageSwitch';
import { ThemeSwitch } from '../ThemeSwitch';
import LogoSvg from '../LogoSvg';
import * as S from './styled';

export const MenuBar: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(true);

  const bind = useScroll(
    ({ direction: [_, y] }) => {
      /* -1 means scrolling up  */
      const nextShowMenuState = y === -1;

      /* Avoid multiple useless set state */
      if (nextShowMenuState === showMenu) return;

      setShowMenu(nextShowMenuState);
    },
    /* This validation is required to bypass gatsby build.
    However client-side will works fine */
    { domTarget: typeof window !== 'undefined' ? window : undefined },
  );

  /* Not using First class saves TS warnings about the returning type
  for the cases "window" isn't defined (aka building time)
  */
  React.useEffect(() => {
    bind();
  }, [bind]);

  const props = useSpring({
    transform: `translateY(${showMenu ? 0 : -100}px)`,
    config: {
      mass: 1,
      tension: 300,
      friction: 40,
    },
  });

  return (
    <React.Fragment>
      <S.MenuBarWrapper style={props}>
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
