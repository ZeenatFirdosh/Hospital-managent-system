import React from 'react';
import Signuppage from './components/Auth/Signuppage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loginpage from './components/Auth/Loginpage';


const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Signuppage/>}/> 
        <Route path='/doctorlogin' element ={<Loginpage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;

