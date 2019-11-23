import React from 'react';
import i18next from 'i18next';
import { Translate } from 'styled-icons/material/Translate';

import { DropdownMenu, DropdownMenuItem } from '../DropdownMenu';
import { MenuButton } from '../MenuBar';
import { useLocale } from '../../utils/LocaleContext';

export const LanguageSwitch = () => {
  const { changeLocale, SupportedLocales } = useLocale();
  return (
    <DropdownMenu
      items={
        <>
          <DropdownMenuItem onClick={() => changeLocale(SupportedLocales.PT)}>
            PT
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLocale(SupportedLocales.EN)}>
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
