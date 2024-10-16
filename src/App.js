import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/aboutUs/AboutUs';

import Appointment from './pages/appointment/Appointment';

import PortalPage from './pages/portal/PortalPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/Appointment' element={<Appointment/>}/>
      <Route path='/PortalPage' element={<PortalPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
