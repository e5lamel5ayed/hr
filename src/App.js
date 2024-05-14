import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './App.css';
import HomePage from './Pages/Home/Home';
import Home2 from './Pages/workingDays/WorkingDaysPage/Home2';
import AttendanceDate from './Pages/workingDays/ModifyAttendanceDate/AttendanceDate';
import PendingMovemente from './Pages/workingDays/PendingMovements/PendingMovemente';
import RegistrationRequests from './Pages/RegistrationRequests/RegistrationRequests';
import Departures from './Pages/Departures/Departures';
import Entities from './Pages/AdministrativeStructure/Entities/Entities';
import Employees from './Pages/AdministrativeStructure/Employees/Employees';
import Websites from './Pages/AccountSetting/Websites/Websites';
import Questions from './Pages/AccountSetting/Questions/Question';
import AudioSentences from './Pages/AccountSetting/AudioSentences/AudioSentences';
import ReviewMovements from './Pages/AccountSetting/ReviewMovements/ReviewMovements';
import Validities from './Pages/AccountSetting/Validities/Validities';
import AlertsManagement from './Pages/AccountSetting/AlertsManagement/AlertsManagement';
import ChangePassword from './Pages/AccountSetting/ChangePassword/ChangePassword';
import ChangeAccountInformation from './Pages/AccountSetting/ChangeAccountInformation/ChangeAccountInformation';
import DeviceInformation from './Pages/AccountSetting/DeviceInformation/DeviceInformation';
import Login from './Pages/Login';
import Login2 from './Pages/Login2';

function App() {
  return (
    <div>
      {/* <Login /> */}
      <div className="App" style={{ direction: 'rtl' }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Login />} />
            <Route path='/HomePage' exact element={<HomePage />} />
            <Route path='/Home2' exact element={<Home2 />} />
            <Route path='/AttendanceDate' exact element={<AttendanceDate />} />
            <Route path='/PendingMovemente' exact element={<PendingMovemente />} />
            <Route path='/RegistrationRequests' exact element={<RegistrationRequests />} />
            <Route path='/Departures' exact element={<Departures />} />
            <Route path='/Entities' exact element={<Entities />} />
            <Route path='/Employees' exact element={<Employees />} />
            <Route path='/Websites' exact element={<Websites />} />
            <Route path='/Questions' exact element={<Questions />} />
            <Route path='/AudioSentences' exact element={<AudioSentences />} />
            <Route path='/ReviewMovements' exact element={<ReviewMovements />} />
            <Route path='/Validities' exact element={<Validities />} />
            <Route path='/AlertsManagement' exact element={<AlertsManagement />} />
            <Route path='/ChangePassword' exact element={<ChangePassword />} />
            <Route path='/ChangeAccountInformation' exact element={<ChangeAccountInformation />} />
            <Route path='/DeviceInformation' exact element={<DeviceInformation />} />
            <Route path='/Login2' exact element={<Login2 />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
    // <Login/>

  );
}

export default App;
