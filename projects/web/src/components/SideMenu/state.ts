import { types } from 'mobx-state-tree';

const SideMenuStore = types
  .model({
    isCollapsed: true,
  })
  .actions((self) => ({
    toggle() {
      self.isCollapsed = !self.isCollapsed;
    },
    show() {
      self.isCollapsed = false;
    },
    hide() {
      self.isCollapsed = true;
    },
  }));

export const sideMenuStore = SideMenuStore.create();
