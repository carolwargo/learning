// src/AppRoutes.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import BottomAppBar from './components/Nav/BottomAppBar';

const LearningPage = lazy(() => import('./pages/LearningPage/LearningPage'));
const HumanResourcesPage = lazy(() => import('./pages/HumanResourcesPage/HumanResourcesPage'));
const AnalysisReport = lazy(() => import('./pages/AnalysisReport/AnalysisReport'));
const ArticlePage = lazy(() => import('./components/HumanResources/ArticlePage'));

function AppRoutes() {
  const location = useLocation();
  const hideAppBarRoutes = ['/analysis-report', '/article'];
  const showBars = !hideAppBarRoutes.some((route) => location.pathname.startsWith(route));

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LearningPage />} />
          <Route path="/hr" element={<HumanResourcesPage />} />
          <Route path="/analysis-report" element={<AnalysisReport />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {showBars && <BottomAppBar />}
    </>
  );
}

function NotFound() {
  return <h1 className="text-center mt-5">404 - Not Found</h1>;
}

export default AppRoutes;