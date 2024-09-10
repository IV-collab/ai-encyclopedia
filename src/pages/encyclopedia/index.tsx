import { Outlet, Link } from 'react-router-dom';
import { IVSidebar } from '@/components/ui/sidebars/Sidebar';
import encyclopediaPages from '@/assets/data/encyclopediaPages';

const EncyclopediaPage = () => {
  return (
    <div className="iv-page h-full">
      <IVSidebar items={encyclopediaPages} />
      <button className="bg-blue-500 w-64 h-10">
        <Link to="react">React</Link>
      </button>
      <Outlet />
    </div>
  );
};

export default EncyclopediaPage;
