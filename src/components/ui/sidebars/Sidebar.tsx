import { SidebarItemsTypes } from '@/lib/enums/sidebar';
import { IVSidebarItems } from '@/components/ui/sidebars/SidebarItems';

export type SidebarItem = {
  type: SidebarItemsTypes;
  trigger: string;
  content: string | SidebarItem[];
};

export function IVSidebar({ items }: { items: SidebarItem[] }) {
  return (
    <div className="iv-sidebar w-96 min-h-screen pl-8 pr-8 pt-8 bg-secondary">
      <div className="text-primary pb-10 text-2xl border-b font-semibold">AI Encyclopedia</div>
      <IVSidebarItems items={items} />
    </div>
  );
}

export default IVSidebar;
