import React, { useContext } from 'react';
import styled from 'styled-components';
import { Sun } from 'styled-icons/boxicons-solid/Sun';
import { Moon } from 'styled-icons/boxicons-solid/Moon';
import { ThemeContext } from '../../config/theme';

const Switch = styled.button`
  background-color: transparent;
  border: none;
  outline: ${({ theme }) => theme.color.background};
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.color.font};
  }
`;

const ThemeSwitch = () => {
  const { toggleTheme, currentTheme, themesAvaiable } = useContext(
    ThemeContext
  );

  const Icon = currentTheme === themesAvaiable.light ? Moon : Sun;

  return (
    <Switch onClick={toggleTheme}>
      <Icon size={21} />
    </Switch>
  );
};

export default ThemeSwitch;
