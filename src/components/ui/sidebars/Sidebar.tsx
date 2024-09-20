import { Link } from 'react-router-dom';

import { SidebarItemTypes } from '@/lib/enums/sidebar';
import { IconTypes } from '@/lib/enums/icon';
import { BRAND_TITLE } from '@/lib/enums/generic';

import { useSidebarContext } from '@/contexts';

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
  const { isCollapsed, toggleCollapse } = useSidebarContext();

  const collapsedSidebar = (): React.ReactNode => {
    return (
      <div className="w-10 h-screen pt-4 pl-1 pr-1">
        <div
          className="collapsible-wrapper p-1 cursor-pointer flex justify-center items-center"
          onClick={toggleCollapse}
        >
          <p className="text-xs">{'>>'}</p>
        </div>
      </div>
    );
  };

  const expandedSidebar = (): React.ReactNode => {
    return (
      <div className="group min-w-96 min-h-screen bg-secondary flex flex-col justify-between pl-7 pr-7">
        <div>
          {/* COLLAPSIBLE */}
          <div
            className="flex justify-end items-center pt-4 pb-3 cursor-pointer opacity-0 group-hover:opacity-100"
            onClick={toggleCollapse}
          >
            <div className="p-1">
              <p className="text-xs">{'<<'}</p>
            </div>
          </div>
          {/* BRAND */}
          <div className="flex flex-row items-center pb-10 border-b">
            <div className="brand-container flex flex-row">
              <IVIcon type={IconTypes.CAPYBARA} />
              <div className="flex items-center ml-2">
                <p className="text-primary text-3xl font-medium">{BRAND_TITLE}</p>
              </div>
            </div>
          </div>
          {/* ITEMS LIST */}
          <div>
            <IVSidebarItems items={items} />
          </div>
        </div>
        {/* Footer */}
        <div className="pb-10 pt-10 border-t">
          <div className="font-medium">
            <Link to={'slate'}>Generate content</Link>
          </div>
        </div>
      </div>
    );
  };

  return <div className="iv-sidebar">{isCollapsed ? collapsedSidebar() : expandedSidebar()}</div>;
}

export default IVSidebar;
