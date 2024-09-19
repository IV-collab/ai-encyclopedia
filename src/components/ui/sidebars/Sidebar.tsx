import React, { useState, useEffect } from 'react';
import { SidebarItemTypes } from '@/lib/enums/sidebar';
import { IconTypes } from '@/lib/enums/icon';
import { BRAND_TITLE } from '@/lib/enums/generic';

import { IVSidebarItems } from '@/components/ui/sidebars/SidebarItems';
import { IVIcon } from '@/components/ui/icons/Icon';

export type SidebarItem = {
  id: string;
  type: SidebarItemTypes;
  trigger: string;
  link?: string;
  content: string | SidebarItem[];
};

export function IVSidebar({ items }: { items: SidebarItem[] }) {
  // State to manage sidebar & hamburger icon during collapse/expand behavior
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  // Function to toggle sidebar collapse
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Handle the delay for hamburger icon appearance
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isCollapsed) {
      // Wait until sidebar is fully collapsed before showing the hamburger icon
      timeoutId = setTimeout(() => {
        setShowHamburger(true);
      }, 300); // This should match the transition duration for the sidebar collapse
    } else {
      // Hide the hamburger icon immediately when expanding the sidebar
      setShowHamburger(false);
    }

    return () => {
      clearTimeout(timeoutId); // Clean up the timeout when component is unmounted or state changes
    };
  }, [isCollapsed]);

  return (
    <div className="collapsable-sidebar">
      <div
        className={`iv-sidebar min-w-96 min-h-screen pl-8 pr-8 pt-8 bg-secondary transition-transform duration-300 ease-in-out z-40
      ${isCollapsed ? '-translate-x-full' : 'translate-x-0'} w-64 fixed left-0 top-0`}
      >
        {/* Top: Icon and brand title */}
        <div className="flex flex-row items-center pb-10 border-b">
          <IVIcon type={IconTypes.CAPYBARA} />
          <div className="flex items-center ml-2">
            <p className="text-primary text-3xl font-medium">{BRAND_TITLE}</p>
          </div>
        </div>
        {/* Top-right: Close button */}
        <button onClick={toggleSidebar} className="absolute top-4 right-4 p-2 bg-red-600 hover:bg-gray-500 text-white">
          {/* TO BE REPLACED BY ICON */}X
        </button>
        {/* Body: Sidebar items */}
        <IVSidebarItems items={items} />
      </div>

      {/* Hamburger Icon - only visible when sidebar is collapsed */}
      {showHamburger && (
        <button
          onClick={toggleSidebar}
          className={`fixed top-4 left-4 p-4 bg-gray-600 hover:bg-gray-500 text-white z-50 transition-opacity duration-300 ease-in-out
          ${isCollapsed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          {/* TO BE REPLACED BY ICON */}E
        </button>
      )}
    </div>
  );
}

export default IVSidebar;
