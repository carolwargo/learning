import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import BottomAppBar from "./components/Nav/BottomAppBar";

const LearningPage = lazy(() => import("./pages/LearningPage/LearningPage"));
const HumanResourcesPage = lazy(() => import("./pages/HumanResourcesPage/HumanResourcesPage"));
const AnalysisReport = lazy(() => import("./pages/AnalysisReport/AnalysisReport"));

function AppRoutes() {
  const location = useLocation();
  const showBars = location.pathname !== "/analysis-report";

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LearningPage />} />
          <Route path="/hr" element={<HumanResourcesPage />} />
          <Route path="/analysis-report" element={<AnalysisReport />} />
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
