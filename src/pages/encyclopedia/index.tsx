import { Outlet } from 'react-router-dom';

import SidebarProvider from '@/contexts/useSidebar';

import encyclopediaSidebarItems from '@/assets/data/encyclopediaSidebarItems';

import { IVSidebar } from '@/components/ui/sidebars/Sidebar';

const EncyclopediaPage = () => {
  return (
    <SidebarProvider>
      <div className="iv-encyclopedia standard-page flex flex-row">
        <IVSidebar items={encyclopediaSidebarItems} />
        <div className="flex-grow flex justify-center">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default EncyclopediaPage;
