import React from 'react';
import i18next from 'i18next';
import { Translate } from 'styled-icons/material/Translate';

import { DropdownMenu, DropdownMenuItem } from '../DropdownMenu';
import { MenuButton } from '../MenuBar';
import { supportedLocales } from '../../../i18n.js';

export const LanguageSwitch = () => {
  return (
    <DropdownMenu
      items={
        <>
          <DropdownMenuItem
            onClick={() =>
              i18next.changeLanguage(supportedLocales['pt-BR'].locale)
            }
          >
            PT
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => i18next.changeLanguage(supportedLocales.en.locale)}
          >
            EN
          </DropdownMenuItem>
        </>
      }
    >
      {({ toggleDropdown }) => {
        return (
          <MenuButton onClick={toggleDropdown}>
            <Translate size={21} />
          </MenuButton>
        );
      }}
    </DropdownMenu>
  );
};
