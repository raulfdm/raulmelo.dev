import styled from 'styled-components';
import mediaQuery from 'styled-media-query';

import { Container } from '../ui';

export const MenuBarWrapper = styled.nav`
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

export const CustomContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mediaQuery.greaterThan('medium')`
    max-width: 80%;
  `}
`;

export const DummySpace = styled.div`
  height: 6.5rem;
  margin-bottom: 6.5rem;
`;

export const LogoWrapper = styled.div`
  flex: 1;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  outline: ${({ theme }) => theme.color.background};
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.color.font};
  }
`;
