import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TestParmes from './components/home/TestParmes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:domain" element={<TestParmes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
