import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './App.css';
import Home from './Pages/Home/Home';
import Home2 from './Pages/workingDays/Home2';

function App() {
  return (
    <div className="App" style={{direction: 'rtl'}}>
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/Home2' exact element={<Home2/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
