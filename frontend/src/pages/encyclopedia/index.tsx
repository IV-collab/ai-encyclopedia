import { Outlet, Link } from 'react-router-dom';

const EncyclopediaPage = () => {
  return (
    <div className="iv-page">
        <button className="bg-blue-500 w-64 h-10">
            <Link to="react">React</Link>
        </button>
        <Outlet />
    </div>
  );
};

export default EncyclopediaPage;
