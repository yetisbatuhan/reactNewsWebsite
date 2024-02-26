import React from 'react';
import './App.css';
import Main from './components/Main/main';
import {  Routes,  Route} from "react-router-dom";
import Business from './pages/Business';
import Entertainment from './pages/Entertainment';
import Health from './pages/Health';
import Science from './pages/Science';
import General from './pages/General';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import Header from './components/Header/Header';


function App() {
  return ( 
    <div >
    
 
   
    
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/Business' element={<Business />} />
          <Route path='/Entertainment' element={<Entertainment />} />
          <Route path='/Health' element={<Health />} />
          <Route path='/Science' element={<Science />} />
          <Route path='/General' element={<General />} />
          <Route path='/Sports' element={<Sports />} />
          <Route path='/Technology' element={<Technology />} />
        </Routes>
      
 

    </div>
  );
}

export default App;
