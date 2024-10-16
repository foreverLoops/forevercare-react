import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/aboutUs/AboutUs';
import Appointment from './pages/appointment/Appointment';
import PortalPage from './pages/portal/PortalPage';
import LoginForm from './pages/login/LoginForm';
import SignUpForm from './pages/signup/SignUpForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/LoginForm' element={<LoginForm/>}/>
      <Route path='/SignUpForm' element={<SignUpForm/>}/>
      <Route path='/Appointment' element={<Appointment/>}/>
      <Route path='/PortalPage' element={<PortalPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
