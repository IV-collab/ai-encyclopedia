import { Outlet, Link } from 'react-router-dom';
import { IVSidebar, SidebarItem } from '@/components/ui/sidebar/Sidebar'
import { SidebarItemsTypes } from '@/lib/enums/sidebar'

const EncyclopediaPage = () => {
  const sidebarItems: SidebarItem[] = [
    {
      type: SidebarItemsTypes.NESTED,
      trigger: 'Git',
      content: [{
        type: SidebarItemsTypes.DEFAULT,
        trigger: 'Introduction',
        content: 'What is it?'
      }]
    },
    {
      type: SidebarItemsTypes.NESTED,
      trigger: 'React',
      content: [{
        type: SidebarItemsTypes.DEFAULT,
        trigger: 'Introduction',
        content: 'What is it?'
      }]
    }
  ]

  return (
    <div className="iv-page h-full">
        <IVSidebar
          items={sidebarItems}
        />
        <button className="bg-blue-500 w-64 h-10">
            <Link to="react">React</Link>
        </button>
        <Outlet />
    </div>
  );
};

export default EncyclopediaPage;
