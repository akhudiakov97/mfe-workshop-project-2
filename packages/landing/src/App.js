import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Box } from "@mui/system";

import Landing from "./components/Landing";
import SecondPage from "./components/SecondPage";

export default function ({ onNavigate }) {
  const location = useLocation();

  useEffect(() => {
    if (onNavigate) {
      onNavigate({ pathname: location.pathname });
    }
  }, [location.pathname]);

  return (
    <Box>
      <Routes>
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Box>
  );
}
