import React from 'react';
import { Sun } from '@styled-icons/boxicons-solid/Sun';
import { Moon } from '@styled-icons/boxicons-solid/Moon';

import { MenuButton } from '@components/MenuBar';
import { useTheme } from '@hooks/useTheme';

export const ThemeSwitch: React.FC = () => {
  const { toggleTheme, isDarkTheme } = useTheme();

  const Icon = isDarkTheme ? Moon : Sun;

  return (
    <MenuButton onClick={() => toggleTheme!()} data-testid="theme-switch">
      <Icon size={21} />
    </MenuButton>
  );
};
