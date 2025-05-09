
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CropAnalysis from './CropAnalysis';

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/crop-analysis/:stateId" element={<CropAnalysis />} />
    </Routes>
  );
};

export default Index;
