import { Outlet } from 'react-router-dom';
import { IVSidebar } from '@/components/ui/sidebars/Sidebar';
import encyclopediaSidebarItems from '@/assets/data/encyclopediaSidebarItems';

const EncyclopediaPage = () => {
  return (
    <div className="iv-encyclopedia standard-page flex flex-row">
      <IVSidebar items={encyclopediaSidebarItems} />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default EncyclopediaPage;
