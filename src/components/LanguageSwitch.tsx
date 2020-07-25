import React from 'react';
import { Language } from '@styled-icons/material/Language';
import { FormattedMessage } from 'react-intl';

import { useIntl } from '@contexts/react-intl';
import { DropdownMenu, DropdownMenuItem } from '@components/DropdownMenu';
import { MenuButton } from '@components/MenuBar';

export const LanguageSwitch: React.FC = () => {
  const { switchToEnglish, switchToPortuguese } = useIntl();

  return (
    <DropdownMenu
      items={
        <>
          <DropdownMenuItem onClick={switchToEnglish}>
            <FormattedMessage id="languages.en" />
          </DropdownMenuItem>
          <DropdownMenuItem onClick={switchToPortuguese}>
            <FormattedMessage id="languages.pt" />
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
