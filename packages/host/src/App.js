import React, { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";

const LandingLazy = lazy(() => import("./components/LandingApp"));

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <React.Suspense fallback="Loading">
          <Routes>
            <Route path="/landing/*" element={<LandingLazy />} />
            <Route path="*" element={<Navigate to="/landing" />} />
          </Routes>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
