// src/AppRoutes.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
//import BottomAppBar from './components/Nav/BottomAppBar';

const LearningPage = lazy(() => import('./pages/LearningPage/LearningPage'));
const HumanResourcesPage = lazy(() => import('./pages/HumanResourcesPage/HumanResourcesPage'));
const AnalysisReport = lazy(() => import('./pages/AnalysisReport/AnalysisReport'));
const HRArticlePage = lazy(() => import('./pages/HumanResourcesPage/HRArticlePage'));
const PaylocityPage = lazy(() => import('./pages/Paylocity/PaylocityPage'));
const PayArticlePage = lazy(() => import('./pages/Paylocity/PayArticlePage'));


function AppRoutes() {
  //const location = useLocation();
  //const hideAppBarRoutes = ['/analysis-report', '/article'];
  //const showBars = !hideAppBarRoutes.some((route) => location.pathname.startsWith(route));

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LearningPage />} />
          <Route path="/hr" element={<HumanResourcesPage />} />
          <Route path="/article/:id" element={<HRArticlePage />} />
          <Route path="/paylocity" element={<PaylocityPage />} />
          <Route path="/paylocity/article/:id" element={<PayArticlePage />} />

          {/* Add the Analysis Report route */}
          {/* <Route path="/analysis-report" element={<AnalysisReport />} /> */}

          {/* If you want to lazy load the Analysis Report, uncomment the line above and comment the one below */}
          <Route path="/analysis-report" element={<AnalysisReport />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

    </>
  );
}

function NotFound() {
  return <h1 className="text-center mt-5">404 - Not Found</h1>;
}

export default AppRoutes;