import React from 'react';

export interface SidebarContextProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

export const SidebarContext = React.createContext<SidebarContextProps | null>(null);

const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return <SidebarContext.Provider value={{ isCollapsed, toggleCollapse }}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
