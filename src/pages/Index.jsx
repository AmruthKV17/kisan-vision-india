
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CropAnalysis from './CropAnalysis';
import Chatbot from './Chatbot';

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/crop-analysis/:stateId" element={<CropAnalysis />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  );
};

export default Index;
