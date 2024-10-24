import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/aboutUs/AboutUs';
import Appointment from './pages/appointment/Appointment';
import PortalPage from './pages/portal/PortalPage';
import LoginForm from './pages/login/LoginForm';
import SignUpForm from './pages/signup/SignUpForm';
import Home from "./pages/home/Home"
import Modal from './pages/appointment/feedbackFormModal';
import Dashboard from './pages/portal/Dashboard'; // Your existing Dashboard component
import MedicalRecords from './pages/portal/MedicalRecords'; // Your existing MedicalRecords component
import Profile from './pages/portal/Profile'; // Your existing Profile component
import Notifications from './pages/portal/Notifications'; // Your existing Notifications component

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/appointment' element={<Appointment/>}/>
      <Route path="/portal" element={<PortalPage />}>
          <Route index element={<Dashboard />} /> {/* Default page in the portal */}
          <Route path="profile" element={<Profile />} />
          <Route path="medical-records" element={<MedicalRecords />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      <Route path='/' element={<LoginForm/>}/>
      <Route path='/SignUpForm' element={<SignUpForm/>}/>
      <Route path='/modal' element={<Modal/>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
