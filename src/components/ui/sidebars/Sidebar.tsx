import { Link } from 'react-router-dom';

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
  return (
    <div className="iv-sidebar min-w-96 min-h-screen pl-8 pr-8 pt-8 bg-secondary flex flex-col justify-between">
      <div>
        <div className="flex flex-row items-center pb-10 border-b">
          <IVIcon type={IconTypes.CAPYBARA} />
          <div className="flex items-center ml-2">
            <p className="text-primary text-3xl font-medium">{BRAND_TITLE}</p>
          </div>
        </div>
        <IVSidebarItems items={items} />
      </div>
      {/* Footer */}
      <div className="pb-10 pt-10 border-t">
        <div className="font-medium">
          <Link to={'slate'}>Generate content</Link>
        </div>
      </div>
    </div>
  );
}

export default IVSidebar;
