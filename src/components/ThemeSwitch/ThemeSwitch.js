import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Lightbulb as LightBulbOn } from 'styled-icons/fa-regular/Lightbulb';
import { Lightbulb as LightBulbOff } from 'styled-icons/fa-solid/Lightbulb';
import { ThemeContext } from '../../config/theme';

const Swtich = styled.button`
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

  const Icon =
    currentTheme === themesAvaiable.light ? LightBulbOff : LightBulbOn;

  return (
    <Swtich onClick={toggleTheme}>
      <Icon size={21} />
    </Swtich>
  );
};

export default ThemeSwitch;
