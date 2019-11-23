import React from 'react';

import { DropdownMenu, DropdownMenuItem, DropdownSeparator } from '.';

export default {
  title: 'DropdownMenu',
  component: DropdownMenu,
};

export const defaultCase = () => {
  return (
    <DropdownMenu
      items={
        <>
          <DropdownMenuItem>Hello</DropdownMenuItem>
          <DropdownMenuItem>Hi</DropdownMenuItem>
          <DropdownSeparator />
          <DropdownMenuItem>Hi</DropdownMenuItem>
          <DropdownMenuItem>Hi</DropdownMenuItem>
          <DropdownMenuItem>Hi</DropdownMenuItem>
          <DropdownSeparator />
          <DropdownMenuItem>Hi</DropdownMenuItem>
        </>
      }
    >
      {({ toggleDropdown }) => {
        return <button onClick={toggleDropdown}>Click Here :)</button>;
      }}
    </DropdownMenu>
  );
};
