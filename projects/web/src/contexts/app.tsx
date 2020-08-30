import React, { createContext, useState } from 'react';

type AppContextTypes = { sideMenu: ReturnType<typeof useSideMenuHandler> };

export const AppContext = createContext<AppContextTypes | undefined>(undefined);

function useSideMenuHandler() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return {
    isCollapsed,
    toggle: () => setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed),
    hide: () => setIsCollapsed(true),
    show: () => setIsCollapsed(false),
  };
}

export const AppContextProvider: React.FC = ({ children }) => {
  const sideMenu = useSideMenuHandler();

  return (
    <AppContext.Provider value={{ sideMenu }}>{children}</AppContext.Provider>
  );
};
