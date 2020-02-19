import React, { useContext } from 'react';

import { Sun } from 'styled-icons/boxicons-solid/Sun';
import { Moon } from 'styled-icons/boxicons-solid/Moon';

import { ThemeContext } from '../../config/theme';
import { MenuButton } from '../MenuBar';

const ThemeSwitch: React.FC = () => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);

  const Icon = isDarkTheme ? Moon : Sun;

  return (
    <MenuButton onClick={toggleTheme}>
      <Icon size={21} />
    </MenuButton>
  );
};

export default ThemeSwitch;
