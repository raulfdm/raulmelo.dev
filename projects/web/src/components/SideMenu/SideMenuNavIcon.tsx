import React from 'react';
import { observer } from 'mobx-react';
import { MenuAlt3 } from '@styled-icons/heroicons-outline/MenuAlt3';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import { MenuButton } from '@components/MenuBar';
import { sideMenuStore } from './state';

export const SideMenuNavIcon = observer(() => {
  const Icon = sideMenuStore.isCollapsed ? MenuAlt3 : CloseOutline;
  return (
    <MenuButton onClick={sideMenuStore.toggle} data-testid="side-menu-button">
      <Icon width={21} />
    </MenuButton>
  );
});
