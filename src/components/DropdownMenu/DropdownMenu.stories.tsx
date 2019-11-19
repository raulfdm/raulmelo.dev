import React from 'react';

import { DropdownMenu, DropdownMenuItem, DropdownSeparator } from '.';

export default {
  title: 'DropdownMenu',
  component: DropdownMenu,
};

export const defaultCase = () => (
  <DropdownMenu>
    <DropdownMenuItem>Hello</DropdownMenuItem>
    <DropdownMenuItem>Hi</DropdownMenuItem>
    <DropdownSeparator />
    <DropdownMenuItem>Hi</DropdownMenuItem>
    <DropdownMenuItem>Hi</DropdownMenuItem>
    <DropdownMenuItem>Hi</DropdownMenuItem>
    <DropdownSeparator />
    <DropdownMenuItem>Hi</DropdownMenuItem>
  </DropdownMenu>
);
