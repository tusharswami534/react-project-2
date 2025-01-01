import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TableMap from './components/home/TableMap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
     <Route path='/' element={<TableMap/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
