import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TableMap from './components/home/TableMap';
import TabsTest from './components/home/TabsTest';
import TabTestTwo from './components/home/TabTestTwo';
import ScrollRevealTest from './components/home/ScrollRevealTest';
import MoJsExample from './components/home/MoJsExample';
import CustomInputFile from './components/home/CustomInputFile';
import MotionJsEmample from './components/home/MotionJsEmample';
import MethodsJs from './components/view/MethodsJs';
import CounterTest from './components/home/CounterTest';
import ParallaxGallery from './components/home/ParallaxGallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
     <Route path='/' element={<TableMap/>} />
     <Route path='/tab-test' element={<TabTestTwo/>} />
     <Route path='/tab-test-two' element={<TabsTest/>} />
     <Route path='/scroll-reveal' element={<ScrollRevealTest/>} />
     <Route path='/mo-js' element={<MoJsExample/>} />
     <Route path='/custom-input-file' element={<CustomInputFile/>} />
     <Route path='/motion-js' element={<MotionJsEmample/>} />
     <Route path='/methods-js' element={<MethodsJs/>} />
     <Route path='/counter-text' element={<CounterTest/>} />
     <Route path='/parallax-gallery' element={<ParallaxGallery/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
