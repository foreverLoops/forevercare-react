import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/aboutUs/AboutUs';
import Appointment from './pages/appointment/Appointment';
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import PortalPage from './pages/portal/PortalPage';
import Home from "./pages/home/Home"

function App() {
  return (
    <BrowserRouter>
    <Routes>
<<<<<<< Updated upstream
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/appointment' element={<Appointment/>}/>
      <Route path='/portal' element={<PortalPage/>}/>
=======
      <Route path='/home' element={<Home />}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/Appointment' element={<Appointment/>}/>
      <Route path='/PortalPage' element={<PortalPage/>}/>
>>>>>>> Stashed changes
    </Routes>
  </BrowserRouter>
  );
}

export default App;
