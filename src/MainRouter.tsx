import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import EncyclopediaPage from '@/pages/encyclopedia';
import ReactPage from '@/pages/encyclopedia/react';
import EncyclopediaPageGitWhatIsIt from '@/pages/encyclopedia/git/whatIsIt';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/encyclopedia" />} />
        <Route path="/encyclopedia" element={<EncyclopediaPage />}>
          <Route path="git" element={<Outlet />}>
            <Route path="what-is-it" element={<EncyclopediaPageGitWhatIsIt />} />
          </Route>
          <Route path="react" element={<ReactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRouter;
