import React from 'react';
import Link from 'gatsby-link';
import { useViewportScroll, useMotionValue } from 'framer-motion';
import { Search as SearchIcon } from '@styled-icons/evil/Search';

import { LanguageSwitch } from '../LanguageSwitch';
import { ThemeSwitch } from '../ThemeSwitch';
import LogoSvg from '../LogoSvg';
import * as S from './styled';

export const MenuBar: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(true);
  const previousPosition = useMotionValue(0);
  const { scrollY } = useViewportScroll();

  React.useEffect(
    () =>
      scrollY.onChange((nextYPosition) => {
        const yDifference = previousPosition.get() - nextYPosition;
        /* Converts from negative to positive */
        const absoluteY = Math.abs(yDifference);

        /* I only want to the computation from 10 by 10
        Otherwise it'll toggle too fast*/
        if (absoluteY < 10) {
          return;
        }

        /* when previous position - next position is:
          - negative => it means scrolling down => I want to hide
          - positive => it means scrolling up => I want to show
         */

        const shouldShow = yDifference > 0;
        setShowMenu(shouldShow);
        /* I need to save nextPosition to the next comparison */
        previousPosition.set(nextYPosition);
      }),
    [scrollY],
  );

  const variants = {
    open: { y: 0 },
    closed: { y: '-100%' },
  };

  return (
    <React.Fragment>
      <S.MenuBarWrapper
        animate={showMenu ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.3, type: 'tween' }}
        data-testid="menu-bar"
      >
        <S.CustomContainer>
          <S.LogoWrapper data-testid="menu-bar__logo">
            <Link to="/">
              <LogoSvg />
            </Link>
          </S.LogoWrapper>
          <S.TextLink to="/cv" data-testid="menu-bar__cv">
            /CV
          </S.TextLink>
          <Link to="/search" data-testid="menu-bar__search">
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
