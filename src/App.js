import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './App.css';
import Home from './Pages/Home/Home';
import Home2 from './Pages/workingDays/WorkingDaysPage/Home2';
import AttendanceDate from './Pages/workingDays/ModifyAttendanceDate/AttendanceDate';
import PendingMovemente from './Pages/workingDays/PendingMovements/PendingMovemente';
import RegistrationRequests from './Pages/RegistrationRequests/RegistrationRequests';

function App() {
  return (
    <div className="App" style={{direction: 'rtl'}}>
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/Home2' exact element={<Home2/>} />
      <Route path='/AttendanceDate' exact element={<AttendanceDate/>} />
      <Route path='/PendingMovemente' exact element={<PendingMovemente/>} />
      <Route path='/RegistrationRequests' exact element={<RegistrationRequests/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
