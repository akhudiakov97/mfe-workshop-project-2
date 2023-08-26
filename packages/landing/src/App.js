import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Box } from '@mui/system';

import Landing from './components/Landing';
import SecondPage from './components/SecondPage';

export default function () {
  return (
    <Box>
        <BrowserRouter>
          <Routes>
            <Route path="/secondPage" element={<SecondPage />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
    </Box>
  );
};
