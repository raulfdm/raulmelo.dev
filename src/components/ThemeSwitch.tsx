import React, { useContext } from 'react';
import { Sun } from '@styled-icons/boxicons-solid/Sun';
import { Moon } from '@styled-icons/boxicons-solid/Moon';

import { ThemeContext } from '../context/theme';
import { MenuButton } from './MenuBar';

export const ThemeSwitch: React.FC = () => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);

  const Icon = isDarkTheme ? Moon : Sun;

  return (
    <MenuButton onClick={toggleTheme} data-testid="theme-switch">
      <Icon size={21} />
    </MenuButton>
  );
};
