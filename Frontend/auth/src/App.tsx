import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainComponent from './MainComponent';
import MainComponent2 from './MainComp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainComponent/>} />
      {/* <Route path="/main" element={<MainComponent2/>} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
