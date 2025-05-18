// ./src/App.js
import { Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Lazy-loaded pages
const LearningPage = lazy(() => import("./pages/LearningPage/LearningPage"));
const BusinessPage = lazy(() => import("./pages/BusinessPage/BusinessPage")); 
const AnalysisReport = lazy(() => import("./pages/AnalysisReport/AnalysisReport")); 

function App() {
  return (
    <div className="App">
      <HashRouter basename="/learning/">
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
            <Routes>
              <Route path="/" element={<LearningPage />} />
              <Route path="/business" element={<BusinessPage />} />
              <Route path="/analysis-report" element={<AnalysisReport />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </HashRouter>
    </div>
  );
}

function NotFound() {
  console.error("Page not found!");
  return <h1 className="text-center mt-5">404 - Not Found</h1>;
}

export default App;
