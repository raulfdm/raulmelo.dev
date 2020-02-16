import React from 'react';
import { Translate } from 'styled-icons/material/Translate';
import { changeLocale } from 'gatsby-plugin-intl';

import { DropdownMenu, DropdownMenuItem } from '../DropdownMenu';
import { MenuButton } from '../MenuBar';
import { LOCALES } from '../../types/Locales';

export const LanguageSwitch: React.FC = () => {
  return (
    <DropdownMenu
      items={
        <>
          <DropdownMenuItem onClick={() => changeLocale(LOCALES.PT)}>
            PT
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLocale(LOCALES.EN)}>
            EN
          </DropdownMenuItem>
        </>
      }
    >
      {({ toggleDropdown }) => {
        return (
          <MenuButton onClick={toggleDropdown}>
            <Translate size={21} crossOrigin />
          </MenuButton>
        );
      }}
    </DropdownMenu>
  );
};
