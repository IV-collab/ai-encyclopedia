import React from 'react';

import { SidebarContext } from '@/contexts/useSidebar';

export const useSidebarContext = () => {
  const context = React.useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebarContext must be used inside SidebarProvider');
  }

  return context;
};
