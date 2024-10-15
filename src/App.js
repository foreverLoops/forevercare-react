import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/aboutUs/AboutUs';

import Appointment from './pages/appointment/Appointment';
<<<<<<< HEAD
import { UserFeedbackForm } from './pages/appointment/UserFeedbackform';


function App() {
  return (
    <div className="App">
      <AboutUs/>
      {/* <Appointment/> */}
      {/* <UserFeedbackForm/> */}
    </div>
    
=======
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
>>>>>>> 54defbd2e1eba020afa0588de3bf4bd392ec4412
  );
}

export default App;
