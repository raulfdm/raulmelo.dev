import styled from 'styled-components';
import mediaQuery from 'styled-media-query';
import { motion } from 'framer-motion';

import { Container } from '../Ui';

export const MenuBarWrapper = styled(motion.nav)`
  box-shadow: 0 4px 12px 0 ${({ theme }) => theme.color.shadowMenu};

  border-bottom: ${({ theme }) =>
    theme.isDarkTheme ? `1px solid ${theme.color.border}` : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
  z-index: 500;

  background-color: ${({ theme }) => theme.color.background};
  transition: background-color 0.2s ease;

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
  height: 65px;
  margin-bottom: 65px;
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
