import React, { useContext } from 'react';

import { Sun } from 'styled-icons/boxicons-solid/Sun';
import { Moon } from 'styled-icons/boxicons-solid/Moon';

import { ThemeContext } from '../../config/theme';
import { MenuButton } from '../MenuBar';

const ThemeSwitch = () => {
  const { toggleTheme, currentTheme, themesAvaiable } = useContext(
    ThemeContext
  );

  const Icon = currentTheme === themesAvaiable.light ? Moon : Sun;

  return (
    <MenuButton onClick={toggleTheme}>
      <Icon size={21} />
    </MenuButton>
  );
};

export default ThemeSwitch;
