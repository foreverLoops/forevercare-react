import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/aboutUs/AboutUs';
import Appointment from './pages/appointment/Appointment';
import PortalPage from './pages/portal/PortalPage';
import LoginForm from './pages/login/LoginForm';
import SignUpForm from './pages/signup/SignUpForm';
import Home from "./pages/home/Home"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/appointment' element={<Appointment/>}/>
      <Route path='/portal' element={<PortalPage/>}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/LoginForm' element={<LoginForm/>}/>
      <Route path='/SignUpForm' element={<SignUpForm/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
