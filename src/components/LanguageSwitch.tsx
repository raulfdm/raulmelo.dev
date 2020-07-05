import React from 'react';
import { Language } from '@styled-icons/material/Language';

import { DropdownMenu, DropdownMenuItem } from './DropdownMenu';
import { MenuButton } from './MenuBar';
import { useIntl } from '../context/react-intl';
import { FormattedMessage } from 'react-intl';

export const LanguageSwitch: React.FC = () => {
  const { switchToEnglish, switchToPortuguese } = useIntl();

  return (
    <DropdownMenu
      items={
        <>
          <DropdownMenuItem onClick={switchToEnglish}>
            <FormattedMessage id="locales.en" />
          </DropdownMenuItem>
          <DropdownMenuItem onClick={switchToPortuguese}>
            <FormattedMessage id="locales.pt" />
          </DropdownMenuItem>
        </>
      }
    >
      {({ toggleDropdown }) => {
        return (
          <MenuButton onClick={toggleDropdown}>
            <Language size={21} />
          </MenuButton>
        );
      }}
    </DropdownMenu>
  );
};
