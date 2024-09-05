import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import EncyclopediaPage from '@/pages/encyclopedia';
import ReactPage from '@/pages/encyclopedia/react';


const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/encyclopedia" />} />
        <Route path="/encyclopedia" element={<EncyclopediaPage />}>
          <Route path="react" element={<ReactPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRouter;
